import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import img from "@/assets/powerinweb_logo.jpeg";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  HelpCircle,
  FileText,
  Mail,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { to: "/about", label: "About" },
    { to: "/websites", label: "Websites" },
    { to: "/blogs", label: "Blogs" },
    { to: "/projects", label: "Projects" }
  ];

  const supportLinks = [
    { to: "/documentation", label: "Documentation", icon: FileText },
    { to: "/faq", label: "FAQ", icon: HelpCircle },
    { to: "/support", label: "Support", icon: Mail }
  ];

  const socialLinks = [
    { 
      to: "https://twitter.com/", 
      label: "X (Twitter)", 
      icon: Twitter,
      external: true 
    },
    { 
      to: "https://github.com/", 
      label: "GitHub", 
      icon: Github,
      external: true 
    },
    { 
      to: "https://www.linkedin.com/", 
      label: "LinkedIn", 
      icon: Linkedin,
      external: true 
    },
    { 
      to: "https://discord.com/", 
      label: "Discord", 
      icon: MessageCircle,
      external: true 
    },
    { 
      to: "https://www.youtube.com/", 
      label: "YouTube", 
      icon: Youtube,
      external: true 
    }
  ];

  const renderLink = (link: { to: string; label: string; icon?: any; external?: boolean }) => {
    const IconComponent = link.icon;
    const linkContent = (
      <span className="flex items-center gap-2 cursor-target hover:underline p-2">
        {IconComponent && <IconComponent className="h-4 w-4 " />}
        {link.label}
        {link.external && <ExternalLink className="h-3 w-3 opacity-60" />}
      </span>
    );

    if (link.external) {
      return (
        <a
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link
        to={link.to}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {linkContent}
      </Link>
    );
  };

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={img} 
                  alt="Powerinweb" 
                  className="h-16 w-16 rounded-full border border-border"
                />
                <div className="lg:hidden">
                  <Link to="/" className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity">
                    Power in Web
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Surf the Web's Hidden Gems
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <Link to="/" className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity">
                  Power in Web
                </Link>
                <p className="text-sm text-muted-foreground mt-2">
                  Surf the Web's Hidden Gems
                </p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 hidden lg:block">
              Discover amazing websites, projects, and insights from across the web. 
              Join our community of web enthusiasts.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {navigationLinks.map((link) => (
                <div key={link.to} className="">
                  {renderLink(link)}
                </div>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <div key={link.to}>
                  {renderLink(link)}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <div key={link.to}>
                  {renderLink(link)}
                </div>
              ))}
            </div>
            
            {/* Newsletter Signup - Optional */}
            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium text-foreground">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                />
                <Button size="sm" className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Power in Web. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link 
                to="/privacy" 
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;