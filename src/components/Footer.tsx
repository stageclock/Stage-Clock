import React from 'react';
import { Clock, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Online Stage Clock</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional timing solutions for events, performances, and presentations. 
              Trusted by event organizers worldwide.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/clock" className="hover:text-foreground transition-colors">Live Clock</Link></li>
              <li><Link to="/timer" className="hover:text-foreground transition-colors">Timer</Link></li>
              <li><Link to="/countdown" className="hover:text-foreground transition-colors">Countdown</Link></li>
              <li><Link to="/stopwatch" className="hover:text-foreground transition-colors">Stopwatch</Link></li>
              <li><button onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'f' }))} className="hover:text-foreground transition-colors text-left">Fullscreen Mode</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#blog" className="hover:text-foreground transition-colors">Clock Blog</a></li>
              <li><a href="#guides" className="hover:text-foreground transition-colors">User Guides</a></li>
              <li><a href="#api" className="hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#support" className="hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-3">
              <a 
                href="https://github.com" 
                className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg hover:bg-muted-foreground/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <a 
                href="https://twitter.com" 
                className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg hover:bg-muted-foreground/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg hover:bg-muted-foreground/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a 
                href="mailto:contact@stageclock.com" 
                className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg hover:bg-muted-foreground/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Built for events and performances
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Online Stage Clock. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;