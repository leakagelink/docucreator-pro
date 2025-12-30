
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import { Calendar, Clock, ArrowRight, FileText, Scale, Home, Briefcase, Users, Shield } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'how-to-create-rent-agreement-india',
      title: 'How to Create a Rent Agreement in India: Complete Guide 2024',
      excerpt: 'Learn the step-by-step process of creating a legally valid rent agreement in India. Understand the key clauses, stamp duty requirements, and registration process.',
      category: 'Legal Guides',
      icon: Home,
      date: '2024-12-28',
      readTime: '8 min read',
      keywords: ['rent agreement', 'rental contract', 'tenant agreement', 'landlord agreement']
    },
    {
      id: 'nda-agreement-template-guide',
      title: 'NDA Agreement: What You Need to Know Before Signing',
      excerpt: 'Understand Non-Disclosure Agreements (NDA), their types, key clauses, and when you should use them to protect your business confidential information.',
      category: 'Business Documents',
      icon: Shield,
      date: '2024-12-25',
      readTime: '6 min read',
      keywords: ['NDA', 'non-disclosure agreement', 'confidentiality agreement', 'business contract']
    },
    {
      id: 'power-of-attorney-types-india',
      title: 'Types of Power of Attorney in India: Which One Do You Need?',
      excerpt: 'Explore different types of Power of Attorney - General POA, Special POA, and Durable POA. Learn when to use each type and how to create them legally.',
      category: 'Legal Guides',
      icon: Scale,
      date: '2024-12-22',
      readTime: '10 min read',
      keywords: ['power of attorney', 'POA', 'general power of attorney', 'special power of attorney']
    },
    {
      id: 'employment-contract-essentials',
      title: 'Essential Clauses Every Employment Contract Should Have',
      excerpt: 'Discover the must-have clauses in employment contracts including salary, benefits, notice period, non-compete, and termination conditions.',
      category: 'Employment',
      icon: Briefcase,
      date: '2024-12-20',
      readTime: '7 min read',
      keywords: ['employment contract', 'job contract', 'hiring agreement', 'employee agreement']
    },
    {
      id: 'partnership-deed-creation-guide',
      title: 'How to Draft a Partnership Deed: Complete Guide with Clauses',
      excerpt: 'Learn how to create a comprehensive partnership deed covering profit sharing, capital contribution, duties, and dissolution terms.',
      category: 'Business Documents',
      icon: Users,
      date: '2024-12-18',
      readTime: '9 min read',
      keywords: ['partnership deed', 'partnership agreement', 'business partnership', 'partner contract']
    },
    {
      id: 'affidavit-writing-format',
      title: 'How to Write an Affidavit: Format, Types, and Examples',
      excerpt: 'Complete guide to writing affidavits in India. Includes formats for name change, address proof, income declaration, and more.',
      category: 'Legal Documents',
      icon: FileText,
      date: '2024-12-15',
      readTime: '6 min read',
      keywords: ['affidavit', 'sworn statement', 'legal declaration', 'notarized affidavit']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Legal Document Blog & Guides | DocuCreator Pro"
        description="Expert guides on creating legal documents in India. Learn about rent agreements, contracts, power of attorney, affidavits, and more with step-by-step tutorials."
        keywords="legal document guides, how to create legal documents, rent agreement guide, NDA template, power of attorney India, legal document tips, contract writing"
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" }
        ]}
      />
      
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-gradient-to-b from-white to-legal-light">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              Legal Document Guides & Resources
            </h1>
            <p className="text-lg text-legal-gray max-w-2xl mx-auto">
              Expert articles and step-by-step guides to help you understand and create professional legal documents in India.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
              <div className="md:w-1/2 bg-legal-navy/5 p-8 flex items-center justify-center">
                <Home className="w-32 h-32 text-legal-navy/30" />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block px-3 py-1 bg-legal-accent/10 text-legal-accent rounded-full text-sm font-medium mb-4">
                  Featured Guide
                </span>
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-legal-gray mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-legal-gray mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link 
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 bg-legal-navy text-white px-6 py-3 rounded-lg hover:bg-legal-accent transition-colors"
                >
                  Read Full Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-legal-navy/5 p-6 flex items-center justify-center">
                  <post.icon className="w-16 h-16 text-legal-navy/30" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-legal-light text-legal-navy rounded text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-legal-navy mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-legal-gray text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-legal-gray">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-legal-accent hover:text-legal-navy transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 p-8 bg-legal-navy rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Ready to Create Your Document?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Use DocuCreator Pro to instantly generate professional legal documents. Free, fast, and legally formatted.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-white text-legal-navy px-6 py-3 rounded-lg hover:bg-legal-light transition-colors font-medium"
            >
              Start Creating Documents
            </Link>
          </div>
        </div>
        
        <PlayStoreCompliantDisclaimer />
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default Blog;
