import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-6">Join Our Team</h2>
          <p className="body-medium text-gray-300 max-w-2xl mx-auto">
            Ready to experience the thrill of professional racing? Get in touch with us to explore opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-3 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="body-medium text-white mb-1">Email</div>
                    <div className="body-small">contact@velocityracing.com</div>
                    <div className="body-small">press@velocityracing.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="body-medium text-white mb-1">Phone</div>
                    <div className="body-small">+1 (555) 123-RACE</div>
                    <div className="body-small">+1 (555) 123-7223</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="body-medium text-white mb-1">Headquarters</div>
                    <div className="body-small">1234 Racing Circuit Drive</div>
                    <div className="body-small">Speedway City, SC 12345</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="heading-3 text-lime-400">Why Join Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="body-small">Championship Wins</span>
                  <span className="heading-3 text-lime-400">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-small">Years of Excellence</span>
                  <span className="heading-3 text-lime-400">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-small">Team Members</span>
                  <span className="heading-3 text-lime-400">45+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-small">Global Presence</span>
                  <span className="heading-3 text-lime-400">15</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="heading-3 text-lime-400">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="caption text-gray-400 mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="caption text-gray-400 mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="caption text-gray-400 mb-2 block">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 body-small"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Driver Application">Driver Application</option>
                    <option value="Sponsorship">Sponsorship Opportunities</option>
                    <option value="Media Request">Media Request</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="caption text-gray-400 mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-600 text-white min-h-32"
                    placeholder="Tell us about your interest in joining our racing team..."
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-primary btn-hover-scale interactive-3d w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;