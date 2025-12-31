import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory: string;
  articles: RelatedArticle[];
  maxArticles?: number;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  currentSlug, 
  currentCategory, 
  articles,
  maxArticles = 3 
}) => {
  // Filter out current article and prioritize same category
  const relatedArticles = articles
    .filter(article => article.id !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === currentCategory ? 1 : 0;
      const bMatch = b.category === currentCategory ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      // Then sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-serif font-bold text-legal-navy mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-legal-accent rounded-full"></span>
        Related Articles You Might Like
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link 
            key={article.id}
            to={`/blog/${article.id}`}
            className="group bg-white border border-gray-100 rounded-lg p-5 hover:shadow-lg hover:border-legal-accent/30 transition-all duration-300"
          >
            <span className="inline-block px-2 py-1 bg-legal-light text-legal-navy rounded text-xs font-medium mb-3">
              {article.category}
            </span>
            
            <h3 className="text-lg font-semibold text-legal-navy mb-2 line-clamp-2 group-hover:text-legal-accent transition-colors">
              {article.title}
            </h3>
            
            <p className="text-legal-gray text-sm mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-legal-gray">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.date).toLocaleDateString('en-IN', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              <span className="flex items-center gap-1 text-legal-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Read
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {/* View All Articles CTA */}
      <div className="mt-8 text-center">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-legal-navy text-white rounded-lg hover:bg-legal-accent transition-colors font-medium"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedArticles;
