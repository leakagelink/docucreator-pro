
import React from 'react';
import { Home, FileText, Wrench, MoreHorizontal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: 'Home',
      path: '/',
      active: location.pathname === '/'
    },
    {
      icon: FileText,
      label: 'Templates',
      path: '/templates',
      active: location.pathname === '/templates'
    },
    {
      icon: Wrench,
      label: 'Tools',
      path: '/#tools',
      active: location.pathname.includes('tools')
    },
    {
      icon: MoreHorizontal,
      label: 'More',
      path: '/about',
      active: location.pathname === '/about'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-inset-bottom">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-0 flex-1",
                item.active
                  ? "text-legal-navy bg-legal-gold/10"
                  : "text-gray-600 hover:text-legal-navy hover:bg-gray-50"
              )}
            >
              <Icon 
                className={cn(
                  "h-5 w-5 mb-1",
                  item.active ? "text-legal-navy" : "text-gray-600"
                )} 
              />
              <span className={cn(
                "text-xs font-medium truncate",
                item.active ? "text-legal-navy" : "text-gray-600"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
