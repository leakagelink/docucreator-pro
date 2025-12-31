import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Blog posts data - update this array when adding new posts
const blogPosts = [
  { slug: 'gift-deed-vs-sale-deed-india', lastmod: '2024-12-30', priority: '0.8' },
  { slug: 'sale-deed-registration-process-india', lastmod: '2024-12-30', priority: '0.8' },
  { slug: 'how-to-register-rent-agreement-online-india', lastmod: '2024-12-30', priority: '0.8' },
  { slug: 'how-to-create-rent-agreement-india', lastmod: '2024-12-30', priority: '0.9' },
  { slug: 'nda-agreement-template-guide', lastmod: '2024-12-30', priority: '0.8' },
  { slug: 'power-of-attorney-types-india', lastmod: '2024-12-30', priority: '0.8' },
  { slug: 'employment-contract-essentials', lastmod: '2024-12-30', priority: '0.7' },
  { slug: 'partnership-deed-creation-guide', lastmod: '2024-12-30', priority: '0.7' },
  { slug: 'affidavit-writing-format', lastmod: '2024-12-30', priority: '0.7' },
];

// Static pages with their priorities
const staticPages = [
  { path: '/', lastmod: '2024-12-30', priority: '1.0', changefreq: 'daily' },
  { path: '/templates', lastmod: '2024-12-30', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', lastmod: '2024-12-30', priority: '0.9', changefreq: 'daily' },
  { path: '/faq', lastmod: '2024-12-30', priority: '0.8', changefreq: 'monthly' },
  { path: '/how-ai-works', lastmod: '2024-12-30', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', lastmod: '2024-12-30', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', lastmod: '2024-12-30', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy', lastmod: '2024-12-30', priority: '0.4', changefreq: 'yearly' },
  { path: '/terms', lastmod: '2024-12-30', priority: '0.4', changefreq: 'yearly' },
  { path: '/seo-generator', lastmod: '2024-12-30', priority: '0.7', changefreq: 'monthly' },
];

const BASE_URL = 'https://docucreatorpro.online';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Generating dynamic sitemap...');
    
    const today = new Date().toISOString().split('T')[0];
    
    // Generate XML for static pages
    const staticPagesXml = staticPages.map(page => `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

    // Generate XML for blog posts
    const blogPostsXml = blogPosts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('');

    // Combine into full sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Generated: ${today} -->
  <!-- Static Pages -->${staticPagesXml}

  <!-- Blog Posts -->${blogPostsXml}
</urlset>`;

    console.log(`Sitemap generated with ${staticPages.length} static pages and ${blogPosts.length} blog posts`);

    return new Response(sitemap, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
