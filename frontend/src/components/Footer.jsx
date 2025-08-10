import React from 'react';
import { Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-lime-400" />
              <div className="heading-3 text-lime-400">VELOCITY</div>
            </div>
            <p className="body-small text-gray-400 max-w-sm">
              Professional racing team dominating tracks worldwide since 2018. 
              Experience the thrill of precision engineering and victory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="heading-3 text-white">Racing</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Our Fleet</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Race Calendar</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Results</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Championships</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Team History</a></li>
            </ul>
          </div>
          
          {/* Team */}
          <div className="space-y-4">
            <h4 className="heading-3 text-white">Team</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Drivers</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Engineers</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Careers</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Partnerships</a></li>
              <li><a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Sponsors</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="heading-3 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                <div className="body-small text-gray-400">
                  contact@velocityracing.com
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                <div className="body-small text-gray-400">
                  +1 (555) 123-RACE
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                <div className="body-small text-gray-400">
                  1234 Racing Circuit Drive<br />
                  Speedway City, SC 12345
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="body-small text-gray-400 mb-4 md:mb-0">
              © 2024 Velocity Racing Team. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Privacy Policy</a>
              <a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Terms of Service</a>
              <a href="#" className="body-small text-gray-400 hover:text-lime-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;