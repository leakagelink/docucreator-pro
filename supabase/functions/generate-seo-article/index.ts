import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topic, seoData, language } = await req.json();
    
    if (!topic) {
      return new Response(
        JSON.stringify({ success: false, error: 'Topic is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');

    if (!lovableApiKey) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Generating SEO article for topic: ${topic}`);

    const systemPrompt = `You are an expert SEO content writer specializing in Indian legal and documentation topics. 
Your articles are:
- Comprehensive and well-researched (2500-3500 words)
- SEO-optimized with proper keyword density (2-3%)
- Written in ${language === 'hindi' ? 'Hindi (Devanagari script)' : language === 'hinglish' ? 'Hinglish (Hindi + English mix, Roman script)' : 'English'}
- Structured for featured snippets and rich results
- Include FAQ section with proper schema-ready format
- Use tables for comparison data
- Include step-by-step guides where relevant
- Cite authoritative Indian government sources
- Optimized for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)`;

    const articlePrompt = `Write a comprehensive, SEO-optimized blog article on: "${topic}"

${seoData ? `Use this SEO research data for optimization:\n${seoData}\n` : ''}

Article Requirements:
1. **Title**: Compelling, keyword-rich, under 60 characters
2. **Meta Description**: Under 160 characters with call-to-action
3. **Introduction** (200-300 words):
   - Hook the reader
   - State the problem/need
   - Preview what they'll learn
   - Include primary keyword naturally

4. **Main Content** (2000-2500 words):
   - Use H2 and H3 headings strategically
   - Include primary keyword in first 100 words
   - Use LSI keywords throughout
   - Add bullet points and numbered lists
   - Include a comparison table if relevant
   - Provide step-by-step instructions
   - Add real examples and case studies
   - Include relevant statistics and data

5. **FAQ Section** (5-7 questions):
   Format each FAQ as:
   Q: [Question including keyword]
   A: [Concise, helpful answer - 2-4 sentences]

6. **Conclusion** (150-200 words):
   - Summarize key points
   - Include call-to-action
   - Reference internal links

7. **SEO Elements**:
   - Suggested image alt texts (3-5)
   - Internal linking opportunities
   - External authority links to cite

Format the article in clean markdown with proper heading hierarchy.
Include "[TABLE]" placeholder where comparison tables should go.
Include "[IMAGE: description]" placeholders for suggested images.`;

    console.log('Calling Lovable AI for article generation...');
    
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: articlePrompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ success: false, error: 'AI credits exhausted. Please add credits.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ success: false, error: `AI API error: ${response.status}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiData = await response.json();
    const article = aiData.choices?.[0]?.message?.content || '';

    console.log('Article generated successfully');

    // Extract meta information from the article
    const titleMatch = article.match(/^#\s*(.+)$/m) || article.match(/\*\*Title[:\s]*\*\*\s*(.+)/i);
    const metaMatch = article.match(/\*\*Meta Description[:\s]*\*\*\s*(.+)/i);

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          topic,
          article,
          extractedMeta: {
            title: titleMatch?.[1]?.trim() || topic,
            metaDescription: metaMatch?.[1]?.trim() || '',
          },
          wordCount: article.split(/\s+/).length,
          generatedAt: new Date().toISOString(),
        },
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Article generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
