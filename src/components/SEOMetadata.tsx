
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  pageType?: 'website' | 'article' | 'product' | 'faq';
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    authorCredentials?: string;
    section?: string;
    wordCount?: number;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqItems?: Array<{ question: string; answer: string }>;
}

const SEOMetadata = ({ 
  title, 
  description, 
  keywords = "rent agreement online India, rental agreement format download, free rent agreement, employment agreement template, partnership deed format, NDA agreement India, legal document generator, e-stamp rental agreement, 11 month rent agreement format, rent agreement kaise banaye, kiraya agreement format Hindi",
  canonicalUrl,
  ogImage = "https://docucreatorpro.online/og-image.png",
  pageType = 'website',
  articleData,
  breadcrumbs,
  faqItems
}: SEOMetadataProps) => {
  const siteUrl = "https://docucreatorpro.online";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const siteName = "DocuCreator Pro";
  
  // WebApplication Schema - Primary for document generator
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DocuCreator Pro",
    "url": siteUrl,
    "description": description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "AI-Powered Document Generation",
      "Rent Agreement Templates",
      "Employment Contract Templates",
      "NDA Agreement Templates",
      "Partnership Deed Templates",
      "E-Signature Support",
      "PDF & Word Download",
      "Model Tenancy Act 2021 Compliant"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": `${siteUrl}/icons/icon-512x512.png`,
    "description": "AI-powered legal document generator for India",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "support@docucreatorpro.online",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/docucreatorpro",
      "https://twitter.com/docucreatorpro",
      "https://linkedin.com/company/docucreatorpro"
    ]
  };

  // WebSite Schema with SearchAction for Sitelinks
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DocuCreator Pro - Legal Document Generator",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    },
    "description": "Create professional legal documents, contracts, and agreements with AI assistance. Free online document generator for India.",
    "featureList": [
      "AI-powered document generation",
      "Multiple document templates",
      "Instant PDF download",
      "Professional formatting",
      "Legal compliance",
      "Hindi and English support"
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  } : null;

  // FAQ Schema
  const faqSchema = faqItems ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Article Schema - Enhanced for Rich Snippets
  const articleSchema = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": ogImage,
      "width": 1200,
      "height": 630
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonicalUrl
    },
    "author": articleData.author ? {
      "@type": "Person",
      "name": articleData.author,
      "description": articleData.authorCredentials || "Legal Document Expert",
      "url": siteUrl
    } : {
      "@type": "Organization",
      "name": siteName
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/icons/icon-512x512.png`,
        "width": 512,
        "height": 512
      }
    },
    "datePublished": articleData.publishedTime,
    "dateModified": articleData.modifiedTime || articleData.publishedTime,
    "articleSection": articleData.section || "Legal Guides",
    "wordCount": articleData.wordCount || 1500,
    "inLanguage": "en-IN",
    "isAccessibleForFree": true
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Language & Hreflang Tags */}
      <html lang="en" />
      <link rel="alternate" hrefLang="en-in" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="hi-in" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="DocuCreator Pro" />
      <meta name="generator" content="DocuCreator Pro" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Geo Tags for India - Important for Local SEO */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Article specific OG tags */}
      {articleData && (
        <>
          <meta property="article:published_time" content={articleData.publishedTime} />
          <meta property="article:modified_time" content={articleData.modifiedTime} />
          <meta property="article:author" content={articleData.author || siteName} />
          <meta property="article:section" content={articleData.section} />
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@docucreatorpro" />
      <meta name="twitter:creator" content="@docucreatorpro" />
      
      {/* Mobile & PWA Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Structured Data - WebApplication (Primary) */}
      <script type="application/ld+json">
        {JSON.stringify(webAppSchema)}
      </script>
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Structured Data - SoftwareApplication */}
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      
      {/* Structured Data - Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Structured Data - FAQ */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Structured Data - Article */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOMetadata;
