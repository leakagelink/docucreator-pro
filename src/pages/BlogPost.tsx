
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import { Calendar, Clock, ArrowLeft, Share2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Blog post content data
const blogPostsData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}> = {
  'how-to-create-rent-agreement-india': {
    title: 'How to Create a Rent Agreement in India: Complete Guide 2024',
    description: 'Learn the step-by-step process of creating a legally valid rent agreement in India. Understand the key clauses, stamp duty requirements, and registration process.',
    keywords: 'rent agreement India, rental agreement format, how to make rent agreement, rental contract template, landlord tenant agreement',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Legal Guides',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>What is a Rent Agreement?</h2>
        <p>
          A rent agreement, also known as a rental agreement or lease agreement, is a legal document that establishes the terms and conditions between a landlord (property owner) and a tenant (renter). This document protects the rights of both parties and outlines their responsibilities.
        </p>

        <h2>Why is a Rent Agreement Important?</h2>
        <ul>
          <li><strong>Legal Protection:</strong> Provides legal recourse in case of disputes</li>
          <li><strong>Clear Terms:</strong> Documents all agreed-upon terms and conditions</li>
          <li><strong>Address Proof:</strong> Serves as a valid address proof for tenants</li>
          <li><strong>Tax Benefits:</strong> Required for claiming HRA exemption</li>
          <li><strong>Bank Accounts:</strong> Needed for opening bank accounts</li>
        </ul>

        <h2>Key Components of a Rent Agreement</h2>
        
        <h3>1. Basic Details</h3>
        <ul>
          <li>Names and addresses of landlord and tenant</li>
          <li>Complete property address and description</li>
          <li>Date of agreement</li>
          <li>Duration of the agreement (11 months is common)</li>
        </ul>

        <h3>2. Financial Terms</h3>
        <ul>
          <li>Monthly rent amount</li>
          <li>Security deposit (typically 2-3 months rent)</li>
          <li>Payment due date</li>
          <li>Late payment penalties</li>
          <li>Rent escalation clause (annual increase)</li>
        </ul>

        <h3>3. Rights and Responsibilities</h3>
        <ul>
          <li>Maintenance responsibilities</li>
          <li>Utility payments (electricity, water, gas)</li>
          <li>Subletting policies</li>
          <li>Pet policies</li>
          <li>Visitor policies</li>
        </ul>

        <h3>4. Termination Clauses</h3>
        <ul>
          <li>Notice period (usually 1-2 months)</li>
          <li>Conditions for early termination</li>
          <li>Security deposit refund terms</li>
        </ul>

        <h2>Stamp Duty Requirements</h2>
        <p>
          Stamp duty varies by state in India. Here are some common rates:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> 0.25% of total rent for the agreement period</li>
          <li><strong>Delhi:</strong> 2% of annual rent</li>
          <li><strong>Karnataka:</strong> 1% of total rent for the agreement period</li>
          <li><strong>Tamil Nadu:</strong> 1% of annual rent</li>
        </ul>

        <h2>Registration Requirements</h2>
        <p>
          Rent agreements for 12 months or more must be registered with the Sub-Registrar office. Agreements for 11 months or less don't require registration but should be notarized for authenticity.
        </p>

        <h2>How to Create Using DocuCreator Pro</h2>
        <ol>
          <li>Visit DocuCreator Pro and select "Rent Agreement"</li>
          <li>Fill in landlord and tenant details</li>
          <li>Enter property address and description</li>
          <li>Specify rent amount and security deposit</li>
          <li>Set the agreement duration and other terms</li>
          <li>Generate and download your PDF document</li>
        </ol>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Ready to Create Your Rent Agreement?</h3>
          <p>Use DocuCreator Pro to generate a professional rent agreement in minutes.</p>
          <Link to="/?template=property-rent" className="text-legal-accent font-medium hover:underline">
            Create Rent Agreement Now →
          </Link>
        </div>
      </div>
    )
  },
  'nda-agreement-template-guide': {
    title: 'NDA Agreement: What You Need to Know Before Signing',
    description: 'Understand Non-Disclosure Agreements (NDA), their types, key clauses, and when you should use them to protect your business confidential information.',
    keywords: 'NDA agreement, non-disclosure agreement template, confidentiality agreement India, NDA format, business NDA',
    date: '2024-12-25',
    readTime: '6 min read',
    category: 'Business Documents',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>What is an NDA (Non-Disclosure Agreement)?</h2>
        <p>
          A Non-Disclosure Agreement (NDA), also called a confidentiality agreement, is a legal contract that creates a confidential relationship between parties. It protects sensitive information from being disclosed to unauthorized individuals.
        </p>

        <h2>Types of NDAs</h2>
        
        <h3>1. Unilateral NDA</h3>
        <p>One party shares confidential information, and the other party agrees not to disclose it. Common in employer-employee relationships.</p>

        <h3>2. Bilateral (Mutual) NDA</h3>
        <p>Both parties share confidential information and agree to protect each other's secrets. Common in business partnerships and joint ventures.</p>

        <h3>3. Multilateral NDA</h3>
        <p>Involves three or more parties where at least one party will share information with others.</p>

        <h2>Key Clauses in an NDA</h2>
        <ul>
          <li><strong>Definition of Confidential Information:</strong> Clearly defines what is considered confidential</li>
          <li><strong>Obligations of Receiving Party:</strong> How the information must be protected</li>
          <li><strong>Exclusions:</strong> Information that is not covered by the NDA</li>
          <li><strong>Time Period:</strong> How long the confidentiality must be maintained</li>
          <li><strong>Return of Materials:</strong> Requirements to return or destroy confidential information</li>
          <li><strong>Consequences of Breach:</strong> Penalties for violating the agreement</li>
        </ul>

        <h2>When to Use an NDA</h2>
        <ul>
          <li>Before sharing business ideas with investors</li>
          <li>When hiring employees with access to sensitive information</li>
          <li>During business negotiations and partnerships</li>
          <li>When outsourcing work to contractors or agencies</li>
          <li>Before sharing proprietary technology or processes</li>
        </ul>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Create Your NDA Now</h3>
          <p>Protect your confidential information with a professionally drafted NDA.</p>
          <Link to="/?template=business-nda" className="text-legal-accent font-medium hover:underline">
            Create NDA Agreement →
          </Link>
        </div>
      </div>
    )
  }
};

// Default content for posts without detailed content
const defaultContent = (title: string) => (
  <div className="prose prose-lg max-w-none">
    <p>This article is coming soon. We're working on creating comprehensive content for "{title}".</p>
    <p>In the meantime, you can use DocuCreator Pro to create your legal documents instantly.</p>
    <div className="bg-legal-light p-6 rounded-lg my-8">
      <h3 className="text-legal-navy">Create Documents Now</h3>
      <p>Use DocuCreator Pro to generate professional legal documents in minutes.</p>
      <Link to="/" className="text-legal-accent font-medium hover:underline">
        Start Creating →
      </Link>
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderAdSenseCompliant />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-legal-navy mb-4">Article Not Found</h1>
            <p className="text-legal-gray mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-legal-accent hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <FooterAdSenseCompliant />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title={`${post.title} | DocuCreator Pro`}
        description={post.description}
        keywords={post.keywords}
        canonicalUrl={`/blog/${slug}`}
        pageType="article"
        articleData={{
          publishedTime: post.date,
          modifiedTime: post.date,
          section: post.category
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` }
        ]}
      />
      
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-legal-gray hover:text-legal-navy mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-legal-accent/10 text-legal-accent rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-legal-gray">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose-headings:text-legal-navy prose-a:text-legal-accent prose-strong:text-legal-navy">
            {post.content || defaultContent(post.title)}
          </div>

          {/* Author Section */}
          <div className="mt-12 p-6 bg-legal-light rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-legal-navy rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-legal-navy">DocuCreator Pro Team</h3>
                <p className="text-sm text-legal-gray">
                  Expert legal document guides and resources to help you create professional documents.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles CTA */}
          <div className="mt-8 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-legal-accent hover:text-legal-navy font-medium"
            >
              View More Articles
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </article>
        
        <PlayStoreCompliantDisclaimer />
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default BlogPost;
