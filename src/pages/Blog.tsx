import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Import blog thumbnails
import rentAgreementThumb from '@/assets/blog/rent-agreement-thumbnail.jpg';
import stampDutyThumb from '@/assets/blog/stamp-duty-thumbnail.jpg';
import affidavitThumb from '@/assets/blog/affidavit-thumbnail.jpg';
import powerOfAttorneyThumb from '@/assets/blog/power-of-attorney-thumbnail.jpg';
import leaveLicenseThumb from '@/assets/blog/leave-license-thumbnail.jpg';
import serviceAgreementThumb from '@/assets/blog/service-agreement-thumbnail.jpg';
import willFormatThumb from '@/assets/blog/will-format-thumbnail.jpg';
import employmentAgreementThumb from '@/assets/blog/employment-agreement-thumbnail.jpg';
import eSignatureThumb from '@/assets/blog/e-signature-thumbnail.jpg';
import partnershipDeedThumb from '@/assets/blog/partnership-deed-thumbnail.jpg';
import giftDeedThumb from '@/assets/blog/gift-deed-thumbnail.jpg';
import saleDeedThumb from '@/assets/blog/sale-deed-thumbnail.jpg';
import ndaAgreementThumb from '@/assets/blog/nda-agreement-thumbnail.jpg';
import employmentContractThumb from '@/assets/blog/employment-contract-thumbnail.jpg';

const Blog = () => {
  const blogPosts = [
    // NEW SEO-optimized posts (KD 0-25)
    {
      id: 'rent-agreement-kaise-banaye-guide-2026',
      title: 'Rent Agreement Kaise Banaye Online 2026 - Complete Guide Hindi',
      excerpt: 'Rent agreement kaise banaye online India mein - complete step-by-step guide. 11 month rental agreement format, stamp duty, documents required. Free PDF download.',
      category: 'Legal Guides',
      thumbnail: rentAgreementThumb,
      date: '2025-01-21',
      readTime: '15 min read',
      keywords: ['rent agreement kaise banaye', '11 month rent agreement', 'rental agreement format Hindi', 'kiraya agreement']
    },
    {
      id: 'stamp-duty-rent-agreement-state-wise-guide',
      title: 'Stamp Duty for Rent Agreement 2026: State-Wise Complete Guide',
      excerpt: 'Complete stamp duty guide for rent agreements. State-wise rates - Maharashtra, Delhi, Karnataka, Tamil Nadu, UP. E-stamp paper process explained.',
      category: 'Legal Guides',
      thumbnail: stampDutyThumb,
      date: '2025-01-21',
      readTime: '18 min read',
      keywords: ['stamp duty rent agreement', 'rental agreement stamp paper', 'e-stamp rent agreement']
    },
    {
      id: 'affidavit-format-hindi-guide',
      title: 'Affidavit Format in Hindi - शपथ पत्र कैसे लिखें (2026 Guide)',
      excerpt: 'Affidavit (शपथ पत्र) format in Hindi with templates. Name change, address proof, income, date of birth affidavit formats. Notarization process.',
      category: 'Legal Documents',
      thumbnail: affidavitThumb,
      date: '2025-01-21',
      readTime: '10 min read',
      keywords: ['affidavit format Hindi', 'शपथ पत्र format', 'self declaration affidavit']
    },
    {
      id: 'power-of-attorney-format-india-guide',
      title: 'Power of Attorney (POA) Format India 2026 - Complete Guide',
      excerpt: 'Power of Attorney kaise banaye? GPA, SPA formats with templates. Property POA, bank POA, medical POA explained. Registration aur stamp duty guide.',
      category: 'Legal Guides',
      thumbnail: powerOfAttorneyThumb,
      date: '2025-01-21',
      readTime: '14 min read',
      keywords: ['power of attorney format India', 'POA format', 'general power of attorney']
    },
    {
      id: 'leave-and-license-agreement-guide',
      title: 'Leave and License Agreement 2026 - Complete Guide (Maharashtra)',
      excerpt: 'Leave and License agreement kaise banaye? 11 month agreement format, stamp duty, online registration Maharashtra. Difference from rent agreement.',
      category: 'Legal Guides',
      thumbnail: leaveLicenseThumb,
      date: '2025-01-21',
      readTime: '12 min read',
      keywords: ['leave and license agreement', 'leave license Maharashtra', '11 month agreement']
    },
    {
      id: 'service-agreement-format-india-freelancer',
      title: 'Service Agreement Format India 2026 - Freelancer & Consultant',
      excerpt: 'Service agreement format for freelancers, consultants, agencies. Payment terms, scope of work, IP rights clauses. Free template download.',
      category: 'Business Documents',
      thumbnail: serviceAgreementThumb,
      date: '2025-01-21',
      readTime: '11 min read',
      keywords: ['service agreement format India', 'freelancer agreement', 'consultant contract']
    },
    {
      id: 'will-format-india-guide',
      title: 'Will Format India 2026 - वसीयतनामा कैसे लिखें (Legal Guide)',
      excerpt: 'Will (वसीयत) kaise likhein? Legal will format India, registration process, essential clauses. Property distribution, executor appointment.',
      category: 'Legal Documents',
      thumbnail: willFormatThumb,
      date: '2025-01-21',
      readTime: '15 min read',
      keywords: ['will format India', 'वसीयतनामा format', 'how to write will']
    },
    {
      id: 'employment-agreement-vs-offer-letter-difference',
      title: 'Employment Agreement vs Offer Letter: Complete Difference Guide 2026',
      excerpt: 'Employment agreement aur offer letter mein kya difference hai? Legal validity, clauses, aur importance. Job joining ke time kya sign karna chahiye.',
      category: 'Employment',
      thumbnail: employmentAgreementThumb,
      date: '2025-01-21',
      readTime: '12 min read',
      keywords: ['employment agreement vs offer letter', 'job offer letter', 'employment contract India']
    },
    {
      id: 'e-signature-legal-validity-india-it-act-2000',
      title: 'E-Signature Legal Validity in India 2026: IT Act 2000 Guide',
      excerpt: 'Is e-signature legally valid in India? Complete guide on IT Act 2000, Aadhaar eSign, DSC. Which documents can be signed electronically.',
      category: 'Legal Guides',
      thumbnail: eSignatureThumb,
      date: '2025-01-21',
      readTime: '14 min read',
      keywords: ['e signature legal validity India', 'IT Act 2000', 'Aadhaar eSign', 'digital signature']
    },
    {
      id: 'partnership-deed-registration-process-india',
      title: 'Partnership Deed Registration Process India 2026: Step-by-Step',
      excerpt: 'Complete guide to partnership deed registration. Documents required, fees, process at Registrar of Firms. Partnership Act 1932 explained.',
      category: 'Business Documents',
      thumbnail: partnershipDeedThumb,
      date: '2025-01-21',
      readTime: '16 min read',
      keywords: ['partnership deed registration', 'partnership firm registration', 'partnership Act 1932']
    },
    // Existing posts
    {
      id: 'gift-deed-vs-sale-deed-india',
      title: 'Gift Deed vs Sale Deed: Which is Better for Property Transfer in India 2024',
      excerpt: 'Comprehensive comparison of Gift Deed and Sale Deed for property transfer in India. Learn about tax implications, stamp duty, legal requirements, and which option is best.',
      category: 'Property Documents',
      thumbnail: giftDeedThumb,
      date: '2024-12-30',
      readTime: '14 min read',
      keywords: ['gift deed', 'sale deed', 'property transfer', 'stamp duty', 'tax implications']
    },
    {
      id: 'sale-deed-registration-process-india',
      title: 'Sale Deed Registration Process in India: Complete Guide 2024',
      excerpt: 'Complete guide to sale deed registration in India. Learn about documents required, stamp duty rates, registration fees, online process, and step-by-step procedure for property transfer.',
      category: 'Property Documents',
      thumbnail: saleDeedThumb,
      date: '2024-12-30',
      readTime: '15 min read',
      keywords: ['sale deed', 'property registration', 'stamp duty', 'conveyance deed']
    },
    {
      id: 'how-to-register-rent-agreement-online-india',
      title: 'How to Register Rent Agreement Online in India: Complete Guide 2024',
      excerpt: 'Learn how to register your rent agreement online in India. Complete guide covering e-registration process, documents required, stamp duty, fees, and state-wise procedures.',
      category: 'Legal Guides',
      thumbnail: rentAgreementThumb,
      date: '2024-12-30',
      readTime: '12 min read',
      keywords: ['register rent agreement', 'e-registration', 'stamp duty', 'online registration']
    },
    {
      id: 'how-to-create-rent-agreement-india',
      title: 'How to Create a Rent Agreement in India: Complete Guide 2024',
      excerpt: 'Learn the step-by-step process of creating a legally valid rent agreement in India. Understand the key clauses, stamp duty requirements, and registration process.',
      category: 'Legal Guides',
      thumbnail: rentAgreementThumb,
      date: '2024-12-28',
      readTime: '8 min read',
      keywords: ['rent agreement', 'rental contract', 'tenant agreement', 'landlord agreement']
    },
    {
      id: 'nda-agreement-template-guide',
      title: 'NDA Agreement: What You Need to Know Before Signing',
      excerpt: 'Understand Non-Disclosure Agreements (NDA), their types, key clauses, and when you should use them to protect your business confidential information.',
      category: 'Business Documents',
      thumbnail: ndaAgreementThumb,
      date: '2024-12-25',
      readTime: '6 min read',
      keywords: ['NDA', 'non-disclosure agreement', 'confidentiality agreement', 'business contract']
    },
    {
      id: 'power-of-attorney-types-india',
      title: 'Types of Power of Attorney in India: Which One Do You Need?',
      excerpt: 'Explore different types of Power of Attorney - General POA, Special POA, and Durable POA. Learn when to use each type and how to create them legally.',
      category: 'Legal Guides',
      thumbnail: powerOfAttorneyThumb,
      date: '2024-12-22',
      readTime: '10 min read',
      keywords: ['power of attorney', 'POA', 'general power of attorney', 'special power of attorney']
    },
    {
      id: 'employment-contract-essentials',
      title: 'Essential Clauses Every Employment Contract Should Have',
      excerpt: 'Discover the must-have clauses in employment contracts including salary, benefits, notice period, non-compete, and termination conditions.',
      category: 'Employment',
      thumbnail: employmentContractThumb,
      date: '2024-12-20',
      readTime: '7 min read',
      keywords: ['employment contract', 'job contract', 'hiring agreement', 'employee agreement']
    },
    {
      id: 'partnership-deed-creation-guide',
      title: 'How to Draft a Partnership Deed: Complete Guide with Clauses',
      excerpt: 'Learn how to create a comprehensive partnership deed covering profit sharing, capital contribution, duties, and dissolution terms.',
      category: 'Business Documents',
      thumbnail: partnershipDeedThumb,
      date: '2024-12-18',
      readTime: '9 min read',
      keywords: ['partnership deed', 'partnership agreement', 'business partnership', 'partner contract']
    },
    {
      id: 'affidavit-writing-format',
      title: 'How to Write an Affidavit: Format, Types, and Examples',
      excerpt: 'Complete guide to writing affidavits in India. Includes formats for name change, address proof, income declaration, and more.',
      category: 'Legal Documents',
      thumbnail: affidavitThumb,
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
      <PageBreadcrumb items={[{ label: "Blog" }]} />
      
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
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={blogPosts[0].thumbnail} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
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
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
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
