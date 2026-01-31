
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { Theme } from '../types';

const Contact: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div className={`py-20 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Stop by for a visit or drop us a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div className={`p-8 rounded-3xl shadow-sm ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'}`}>
              <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-full text-amber-500 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="opacity-70">123 Royal Street, New Orleans, LA 70130</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-full text-amber-500 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="opacity-70">(504) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-full text-amber-500 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="opacity-70">bonjour@fqbistro.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl shadow-sm ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'}`}>
              <h2 className="text-3xl font-serif mb-6">Operating Hours</h2>
              <ul className="space-y-4 opacity-80">
                <li className="flex justify-between border-b border-gray-100 dark:border-zinc-800 pb-2">
                  <span>Monday - Thursday</span>
                  <span className="font-bold">11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 dark:border-zinc-800 pb-2">
                  <span>Friday - Saturday</span>
                  <span className="font-bold">11:00 AM - 11:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">10:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Static Map Image Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden grayscale contrast-125 shadow-xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="New Orleans Map" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-amber-500/20 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-2xl flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>FIND US ON GOOGLE MAPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className={`p-8 md:p-12 rounded-3xl shadow-2xl transition-colors ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'}`}>
            <h2 className="text-4xl font-serif mb-4">Send a Message</h2>
            <p className="opacity-70 mb-8">Have a specific question about an event or our menu? We'll get back to you within 24 hours.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Full Name</label>
                <input 
                  required 
                  type="text" 
                  className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Email</label>
                <input 
                  required 
                  type="email" 
                  className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Subject</label>
                <select 
                  className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors appearance-none ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                >
                  <option>General Inquiry</option>
                  <option>Private Events</option>
                  <option>Media & Press</option>
                  <option>Career Opportunities</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Message</label>
                <textarea 
                  required 
                  rows={6}
                  className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors resize-none ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-md font-bold text-lg transition-all shadow-lg flex items-center justify-center space-x-2">
                <Send size={18} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
