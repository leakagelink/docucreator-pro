import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// IndexNow API key - this should be the same as the key file hosted on your domain
const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0';
const SITE_URL = 'https://docucreatorpro.online';

// Search engine IndexNow endpoints
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls } = await req.json();
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      console.log('No URLs provided for indexing');
      return new Response(
        JSON.stringify({ error: 'Please provide an array of URLs to index' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`Submitting ${urls.length} URLs to IndexNow:`, urls);

    // Format URLs with full domain
    const fullUrls = urls.map((url: string) => 
      url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
    );

    // Submit to all IndexNow endpoints
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        const payload = {
          host: new URL(SITE_URL).hostname,
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: fullUrls,
        };

        console.log(`Submitting to ${endpoint}:`, JSON.stringify(payload));

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const status = response.status;
        let responseText = '';
        try {
          responseText = await response.text();
        } catch {
          responseText = 'No response body';
        }

        console.log(`Response from ${endpoint}: ${status} - ${responseText}`);

        return {
          endpoint,
          status,
          success: status >= 200 && status < 300,
          response: responseText,
        };
      })
    );

    const successCount = results.filter(
      r => r.status === 'fulfilled' && r.value.success
    ).length;

    console.log(`IndexNow submission complete. ${successCount}/${INDEXNOW_ENDPOINTS.length} endpoints succeeded.`);

    return new Response(
      JSON.stringify({
        success: true,
        urlsSubmitted: fullUrls.length,
        endpointsNotified: INDEXNOW_ENDPOINTS.length,
        successfulEndpoints: successCount,
        results: results.map(r => 
          r.status === 'fulfilled' ? r.value : { error: r.reason }
        ),
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
