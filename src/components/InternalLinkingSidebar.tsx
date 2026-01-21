import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Home, Briefcase, Users, Shield, Scale, ArrowRight, Sparkles } from 'lucide-react';

interface RelatedTemplate {
  slug: string;
  title: string;
  icon: React.ElementType;
  category: string;
}

interface RelatedBlogPost {
  slug: string;
  title: string;
  category: string;
}

interface InternalLinkingSidebarProps {
  currentSlug: string;
  currentCategory: string;
}

// Template clusters for internal linking
const templateClusters: Record<string, RelatedTemplate[]> = {
  'rental': [
    { slug: '/?template=agreements-rental', title: 'Rent Agreement Generator', icon: Home, category: 'Property' },
    { slug: '/?template=property-lease', title: 'Lease Agreement', icon: Home, category: 'Property' },
    { slug: '/?template=property-rent', title: 'Rent Receipt', icon: FileText, category: 'Property' },
  ],
  'employment': [
    { slug: '/?template=employment-appointment', title: 'Employment Agreement', icon: Briefcase, category: 'Employment' },
    { slug: '/?template=employment-offer', title: 'Offer Letter Generator', icon: Briefcase, category: 'Employment' },
    { slug: '/?template=employment-nda', title: 'Employee NDA', icon: Shield, category: 'Employment' },
  ],
  'business': [
    { slug: '/?template=agreements-nda', title: 'NDA Agreement', icon: Shield, category: 'Business' },
    { slug: '/?template=agreements-partnership', title: 'Partnership Deed', icon: Users, category: 'Business' },
    { slug: '/?template=agreements-service', title: 'Service Agreement', icon: Briefcase, category: 'Business' },
  ],
  'legal': [
    { slug: '/?template=other-affidavit', title: 'Affidavit Generator', icon: FileText, category: 'Legal' },
    { slug: '/?template=other-poa', title: 'Power of Attorney', icon: Scale, category: 'Legal' },
    { slug: '/?template=other-will', title: 'Will/Testament', icon: FileText, category: 'Legal' },
  ],
};

// Blog post clusters for internal linking
const blogClusters: Record<string, RelatedBlogPost[]> = {
  'rental': [
    { slug: 'rent-agreement-kaise-banaye-guide-2026', title: 'Rent Agreement Kaise Banaye (2026)', category: 'Legal Guides' },
    { slug: 'stamp-duty-rent-agreement-state-wise-guide', title: 'Stamp Duty State-Wise Guide', category: 'Legal Guides' },
    { slug: 'leave-and-license-agreement-guide', title: 'Leave & License Agreement', category: 'Legal Guides' },
    { slug: 'how-to-register-rent-agreement-online-india', title: 'Online Rent Agreement Registration', category: 'Legal Guides' },
  ],
  'employment': [
    { slug: 'employment-agreement-vs-offer-letter-difference', title: 'Employment vs Offer Letter', category: 'Employment' },
    { slug: 'employment-contract-essentials', title: 'Employment Contract Essentials', category: 'Employment' },
    { slug: 'nda-agreement-hindi-guide', title: 'NDA Agreement Hindi Guide', category: 'Business' },
  ],
  'business': [
    { slug: 'nda-agreement-hindi-guide', title: 'NDA Agreement in Hindi', category: 'Business' },
    { slug: 'partnership-deed-registration-process-india', title: 'Partnership Deed Registration', category: 'Business' },
    { slug: 'service-agreement-format-india-freelancer', title: 'Service Agreement Format', category: 'Business' },
  ],
  'legal': [
    { slug: 'affidavit-format-hindi-guide', title: 'Affidavit Format Hindi', category: 'Legal' },
    { slug: 'power-of-attorney-format-india-guide', title: 'Power of Attorney Format', category: 'Legal' },
    { slug: 'will-format-india-guide', title: 'Will Format India', category: 'Legal' },
    { slug: 'e-signature-legal-validity-india-it-act-2000', title: 'E-Signature Legal Validity', category: 'Legal' },
  ],
};

// Map category keywords to cluster keys
const getClusters = (category: string): string[] => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('rent') || categoryLower.includes('property') || categoryLower.includes('leave')) {
    return ['rental', 'legal'];
  }
  if (categoryLower.includes('employment') || categoryLower.includes('job')) {
    return ['employment', 'business'];
  }
  if (categoryLower.includes('business') || categoryLower.includes('partner') || categoryLower.includes('nda')) {
    return ['business', 'employment'];
  }
  return ['legal', 'business'];
};

const InternalLinkingSidebar: React.FC<InternalLinkingSidebarProps> = ({ currentSlug, currentCategory }) => {
  const clusterKeys = getClusters(currentCategory);
  
  // Get related templates (max 4)
  const relatedTemplates: RelatedTemplate[] = [];
  clusterKeys.forEach(key => {
    const cluster = templateClusters[key] || [];
    cluster.forEach(template => {
      if (relatedTemplates.length < 4 && !relatedTemplates.find(t => t.slug === template.slug)) {
        relatedTemplates.push(template);
      }
    });
  });

  // Get related blog posts (max 4, excluding current)
  const relatedBlogs: RelatedBlogPost[] = [];
  clusterKeys.forEach(key => {
    const cluster = blogClusters[key] || [];
    cluster.forEach(blog => {
      if (relatedBlogs.length < 4 && blog.slug !== currentSlug && !relatedBlogs.find(b => b.slug === blog.slug)) {
        relatedBlogs.push(blog);
      }
    });
  });

  return (
    <aside className="lg:w-80 space-y-6">
      {/* Related Templates Card */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-legal-navy to-legal-accent p-4">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Create Documents FREE
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {relatedTemplates.map((template, index) => (
            <Link
              key={index}
              to={template.slug}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-legal-light transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-legal-light flex items-center justify-center group-hover:bg-legal-accent/20 transition-colors">
                <template.icon className="w-5 h-5 text-legal-navy" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-legal-navy group-hover:text-legal-accent transition-colors">
                  {template.title}
                </p>
                <p className="text-xs text-legal-gray">{template.category}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-legal-gray group-hover:text-legal-accent transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Related Articles Card */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="bg-legal-light p-4 border-b">
          <h3 className="text-legal-navy font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Related Guides
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {relatedBlogs.map((blog, index) => (
            <Link
              key={index}
              to={`/blog/${blog.slug}`}
              className="block p-3 rounded-lg hover:bg-legal-light transition-colors group"
            >
              <p className="text-sm font-medium text-legal-navy group-hover:text-legal-accent transition-colors line-clamp-2">
                {blog.title}
              </p>
              <p className="text-xs text-legal-gray mt-1">{blog.category}</p>
            </Link>
          ))}
        </div>
        <div className="p-4 border-t">
          <Link
            to="/blog"
            className="text-sm text-legal-accent hover:text-legal-navy font-medium flex items-center gap-1"
          >
            View All Articles
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Quick Links Card */}
      <div className="bg-gradient-to-br from-legal-navy to-legal-accent rounded-xl p-5 text-white">
        <h3 className="font-semibold mb-3">Need Help?</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>
            <Link to="/faq" className="hover:text-white flex items-center gap-2">
              → Frequently Asked Questions
            </Link>
          </li>
          <li>
            <Link to="/templates" className="hover:text-white flex items-center gap-2">
              → Browse All Templates
            </Link>
          </li>
          <li>
            <Link to="/how-ai-works" className="hover:text-white flex items-center gap-2">
              → How Our AI Works
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white flex items-center gap-2">
              → Contact Support
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default InternalLinkingSidebar;