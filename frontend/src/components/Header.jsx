import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Trophy, Car, BarChart3, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Fleet', href: '#fleet', icon: Car },
    { name: 'Results', href: '#results', icon: BarChart3 },
    { name: 'Team', href: '#team', icon: Trophy },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="heading-3 text-lime-400">
              VELOCITY
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link flex items-center gap-2 text-gray-300 hover:text-lime-400 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </nav>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('#contact')}
            >
              Join Team
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lime-400 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link flex items-center gap-3 text-gray-300 hover:text-lime-400 transition-colors py-2"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
              <Button 
                className="btn-primary mt-4"
                onClick={() => scrollToSection('#contact')}
              >
                Join Team
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;