import React from 'react';
import { Clock, Github, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Online Stage Clock</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Professional Event Timing Solutions</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/clock" className="text-foreground hover:text-primary transition-colors">Clock</Link>
            <Link to="/timer" className="text-foreground hover:text-primary transition-colors">Timer</Link>
            <Link to="/countdown" className="text-foreground hover:text-primary transition-colors">Countdown</Link>
            <Link to="/stopwatch" className="text-foreground hover:text-primary transition-colors">Stopwatch</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">GitHub</span>
              </a>
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;