import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              className="font-heading text-2xl font-semibold text-foreground"
            >
              Wanderlust
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Stories from the road, one adventure at a time. Exploring the world 
              through slow travel, local food, and meaningful connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/category/destinations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Destinations
              </Link>
              <Link to="/category/tips" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Travel Tips
              </Link>
              <Link to="/category/food" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Food & Drink
              </Link>
              <Link to="/category/culture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Culture
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">
              Stay Connected
            </h4>
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary/80 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary/80 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:hello@wanderlust.com" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary/80 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Subscribe to the newsletter for travel stories and tips.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wanderlust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
