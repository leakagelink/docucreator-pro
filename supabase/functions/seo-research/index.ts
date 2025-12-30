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
    const { topic, type } = await req.json();
    
    if (!topic) {
      return new Response(
        JSON.stringify({ success: false, error: 'Topic is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const perplexityKey = Deno.env.get('PERPLEXITY_API_KEY');
    const firecrawlKey = Deno.env.get('FIRECRAWL_API_KEY');

    if (!perplexityKey) {
      console.error('PERPLEXITY_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Perplexity connector not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Starting SEO research for topic: ${topic}, type: ${type}`);

    // Step 1: Use Perplexity for deep SEO research
    const seoPrompt = `You are an expert SEO content strategist. Research and provide comprehensive SEO data for the topic: "${topic}"

Please provide:
1. **Primary Keywords** (5-10): Main keywords with search volume estimates (high/medium/low)
2. **Long-tail Keywords** (10-15): Specific phrases people search for
3. **LSI Keywords** (10-15): Semantically related terms
4. **Search Intent Analysis**: What users are looking for
5. **Content Structure Recommendations**: H1, H2, H3 headings outline
6. **Featured Snippet Opportunities**: Questions to answer
7. **Competitor Insights**: What top-ranking content includes
8. **Word Count Recommendation**: Optimal article length
9. **Meta Title Suggestions** (3 options): Under 60 characters
10. **Meta Description Suggestions** (3 options): Under 160 characters

Focus on India-specific context where relevant. Be specific and actionable.`;

    console.log('Calling Perplexity API for SEO research...');
    
    const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar-pro',
        messages: [
          { role: 'system', content: 'You are an expert SEO analyst. Provide detailed, data-driven SEO insights. Use current 2024-2025 trends and best practices.' },
          { role: 'user', content: seoPrompt }
        ],
        search_recency_filter: 'month',
      }),
    });

    if (!perplexityResponse.ok) {
      const errorText = await perplexityResponse.text();
      console.error('Perplexity API error:', perplexityResponse.status, errorText);
      return new Response(
        JSON.stringify({ success: false, error: `Perplexity API error: ${perplexityResponse.status}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const perplexityData = await perplexityResponse.json();
    const seoResearch = perplexityData.choices?.[0]?.message?.content || '';
    const citations = perplexityData.citations || [];

    console.log('Perplexity research completed successfully');

    // Step 2: If Firecrawl is available, scrape top competitor content
    let competitorData = null;
    if (firecrawlKey && type === 'full') {
      console.log('Starting Firecrawl competitor analysis...');
      
      try {
        // Search for top-ranking content
        const searchResponse = await fetch('https://api.firecrawl.dev/v1/search', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${firecrawlKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `${topic} India`,
            limit: 5,
            scrapeOptions: {
              formats: ['markdown', 'links'],
            },
          }),
        });

        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          competitorData = {
            results: searchData.data?.slice(0, 5).map((item: any) => ({
              title: item.title,
              url: item.url,
              description: item.description,
              wordCount: item.markdown?.split(/\s+/).length || 0,
            })),
          };
          console.log('Firecrawl competitor analysis completed');
        } else {
          console.log('Firecrawl search failed, continuing without competitor data');
        }
      } catch (firecrawlError) {
        console.error('Firecrawl error:', firecrawlError);
        // Continue without Firecrawl data
      }
    }

    // Step 3: Generate SEO-optimized article outline using Perplexity
    const articlePrompt = `Based on the SEO research for "${topic}", create a comprehensive, SEO-optimized article outline in Hindi and English mixed content (Hinglish style, suitable for Indian audience).

Include:
1. **Title Tag** (under 60 chars, include primary keyword)
2. **Meta Description** (under 160 chars, compelling with CTA)
3. **H1 Heading** (engaging, keyword-rich)
4. **Article Structure**:
   - Introduction (hook + what readers will learn)
   - Main sections with H2/H3 headings
   - FAQ section (5-7 questions with schema-ready answers)
   - Conclusion with CTA

5. **Internal Linking Suggestions**: Related topics to link to
6. **External Authority Links**: What to reference
7. **Image Alt Text Suggestions**: For visual content
8. **Schema Markup Recommendations**: FAQ, HowTo, or Article

Make the content structure comprehensive (2000-3000 words target) and optimized for featured snippets.`;

    console.log('Generating article outline...');
    
    const outlineResponse = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar-pro',
        messages: [
          { role: 'system', content: 'You are an expert content writer and SEO specialist. Create detailed, actionable content outlines.' },
          { role: 'user', content: articlePrompt }
        ],
      }),
    });

    let articleOutline = '';
    if (outlineResponse.ok) {
      const outlineData = await outlineResponse.json();
      articleOutline = outlineData.choices?.[0]?.message?.content || '';
      console.log('Article outline generated successfully');
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          topic,
          seoResearch,
          articleOutline,
          competitorData,
          citations,
          generatedAt: new Date().toISOString(),
        },
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('SEO research error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
