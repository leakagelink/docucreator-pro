import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Search, FileText, TrendingUp, Loader2, Copy, Download, CheckCircle, Globe, Target, BarChart3 } from 'lucide-react';

interface SEOResearchData {
  topic: string;
  seoResearch: string;
  articleOutline: string;
  competitorData: {
    results: Array<{
      title: string;
      url: string;
      description: string;
      wordCount: number;
    }>;
  } | null;
  citations: string[];
  generatedAt: string;
}

interface GeneratedArticle {
  topic: string;
  article: string;
  extractedMeta: {
    title: string;
    metaDescription: string;
  };
  wordCount: number;
  generatedAt: string;
}

const SEOArticleGenerator = () => {
  const { toast } = useToast();
  const [topic, setTopic] = useState('');
  const [language, setLanguage] = useState<'english' | 'hindi' | 'hinglish'>('english');
  const [isResearching, setIsResearching] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [seoData, setSeoData] = useState<SEOResearchData | null>(null);
  const [article, setArticle] = useState<GeneratedArticle | null>(null);
  const [activeTab, setActiveTab] = useState('research');

  const handleResearch = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic to research",
        variant: "destructive"
      });
      return;
    }

    setIsResearching(true);
    setSeoData(null);

    try {
      const { data, error } = await supabase.functions.invoke('seo-research', {
        body: { topic, type: 'full' }
      });

      if (error) throw error;

      if (data.success) {
        setSeoData(data.data);
        setActiveTab('research');
        toast({
          title: "Research Complete",
          description: "SEO research data has been gathered successfully"
        });
      } else {
        throw new Error(data.error || 'Research failed');
      }
    } catch (error) {
      console.error('Research error:', error);
      toast({
        title: "Research Failed",
        description: error instanceof Error ? error.message : "Failed to perform SEO research",
        variant: "destructive"
      });
    } finally {
      setIsResearching(false);
    }
  };

  const handleGenerateArticle = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic first",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setArticle(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-seo-article', {
        body: { 
          topic, 
          seoData: seoData?.seoResearch || '',
          language 
        }
      });

      if (error) throw error;

      if (data.success) {
        setArticle(data.data);
        setActiveTab('article');
        toast({
          title: "Article Generated",
          description: `${data.data.wordCount} words article created successfully`
        });
      } else {
        throw new Error(data.error || 'Generation failed');
      }
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate article",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: `${label} copied to clipboard`
    });
  };

  const downloadAsMarkdown = () => {
    if (!article) return;
    const blob = new Blob([article.article], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/\s+/g, '-').toLowerCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="AI SEO Article Generator | DocuCreator Pro"
        description="Generate SEO-optimized articles with AI-powered research. Uses real-time web data, competitor analysis, and keyword research to create high-ranking content."
        keywords="SEO article generator, AI content writer, SEO optimized articles, keyword research, content creation tool"
        canonicalUrl="/seo-generator"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "SEO Article Generator", url: "/seo-generator" }
        ]}
      />
      
      <HeaderAdSenseCompliant />
      <PageBreadcrumb items={[{ label: "SEO Article Generator" }]} />
      
      <main className="flex-grow bg-gradient-to-b from-white to-legal-light">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-legal-accent/10 text-legal-accent rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              AI-Powered SEO Research
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              SEO Article Generator
            </h1>
            <p className="text-lg text-legal-gray max-w-2xl mx-auto">
              Research keywords with Perplexity AI, analyze competitors with Firecrawl, and generate SEO-optimized articles automatically.
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-legal-accent" />
                Enter Your Topic
              </CardTitle>
              <CardDescription>
                Enter the topic you want to write about. We'll research keywords, analyze competitors, and generate an SEO-optimized article.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="e.g., Sale Deed Registration Process in India"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="flex-1"
                />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'english' | 'hindi' | 'hinglish')}
                  className="px-4 py-2 border rounded-md bg-white"
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi (हिंदी)</option>
                  <option value="hinglish">Hinglish (Mix)</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleResearch}
                  disabled={isResearching || !topic.trim()}
                  className="bg-legal-navy hover:bg-legal-accent"
                >
                  {isResearching ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Researching...
                    </>
                  ) : (
                    <>
                      <Globe className="w-4 h-4 mr-2" />
                      Research Keywords & Competitors
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleGenerateArticle}
                  disabled={isGenerating || !topic.trim()}
                  variant="outline"
                  className="border-legal-accent text-legal-accent hover:bg-legal-accent hover:text-white"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Article
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {(seoData || article) && (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="research" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  SEO Research
                </TabsTrigger>
                <TabsTrigger value="competitors" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Competitors
                </TabsTrigger>
                <TabsTrigger value="article" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Generated Article
                </TabsTrigger>
              </TabsList>

              <TabsContent value="research">
                {seoData ? (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Keyword Research & SEO Analysis</CardTitle>
                        <CardDescription>
                          Research powered by Perplexity AI • Generated: {new Date(seoData.generatedAt).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(seoData.seoResearch, 'SEO Research')}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none bg-gray-50 p-6 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm font-sans">{seoData.seoResearch}</pre>
                      </div>
                      
                      {seoData.articleOutline && (
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold mb-3">Article Outline</h3>
                          <div className="prose max-w-none bg-blue-50 p-6 rounded-lg">
                            <pre className="whitespace-pre-wrap text-sm font-sans">{seoData.articleOutline}</pre>
                          </div>
                        </div>
                      )}

                      {seoData.citations && seoData.citations.length > 0 && (
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold mb-3">Sources & Citations</h3>
                          <div className="flex flex-wrap gap-2">
                            {seoData.citations.map((citation, index) => (
                              <a
                                key={index}
                                href={citation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs bg-legal-light text-legal-navy px-3 py-1 rounded-full hover:bg-legal-accent/20 truncate max-w-xs"
                              >
                                {citation}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="p-8 text-center">
                    <Search className="w-12 h-12 text-legal-gray/30 mx-auto mb-4" />
                    <p className="text-legal-gray">Click "Research Keywords & Competitors" to get started</p>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="competitors">
                {seoData?.competitorData?.results ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Competitor Analysis</CardTitle>
                      <CardDescription>
                        Top ranking content analyzed by Firecrawl
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {seoData.competitorData.results.map((result, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <a
                                  href={result.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-legal-navy font-medium hover:text-legal-accent"
                                >
                                  {result.title}
                                </a>
                                <p className="text-sm text-legal-gray mt-1">{result.description}</p>
                                <p className="text-xs text-legal-gray/60 mt-2">{result.url}</p>
                              </div>
                              <Badge variant="secondary">
                                {result.wordCount} words
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="p-8 text-center">
                    <BarChart3 className="w-12 h-12 text-legal-gray/30 mx-auto mb-4" />
                    <p className="text-legal-gray">Competitor data will appear after research</p>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="article">
                {article ? (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          {article.extractedMeta.title || 'Generated Article'}
                        </CardTitle>
                        <CardDescription>
                          {article.wordCount} words • Generated: {new Date(article.generatedAt).toLocaleString()}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(article.article, 'Article')}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={downloadAsMarkdown}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {article.extractedMeta.metaDescription && (
                        <div className="mb-4 p-4 bg-green-50 rounded-lg">
                          <p className="text-sm font-medium text-green-800">Meta Description:</p>
                          <p className="text-sm text-green-700">{article.extractedMeta.metaDescription}</p>
                        </div>
                      )}
                      <div className="prose max-w-none bg-white border p-6 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm font-sans">{article.article}</pre>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="p-8 text-center">
                    <FileText className="w-12 h-12 text-legal-gray/30 mx-auto mb-4" />
                    <p className="text-legal-gray">Click "Generate Article" to create SEO-optimized content</p>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          )}

          {/* Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Globe className="w-10 h-10 text-legal-accent mb-4" />
                <h3 className="font-semibold text-legal-navy mb-2">Real-time Research</h3>
                <p className="text-sm text-legal-gray">
                  Perplexity AI searches the web in real-time to find current keyword data and trends.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BarChart3 className="w-10 h-10 text-legal-accent mb-4" />
                <h3 className="font-semibold text-legal-navy mb-2">Competitor Analysis</h3>
                <p className="text-sm text-legal-gray">
                  Firecrawl scrapes top-ranking content to understand what's working in your niche.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Target className="w-10 h-10 text-legal-accent mb-4" />
                <h3 className="font-semibold text-legal-navy mb-2">SEO Optimization</h3>
                <p className="text-sm text-legal-gray">
                  AI generates articles with proper keyword density, meta tags, and FAQ schema.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default SEOArticleGenerator;
