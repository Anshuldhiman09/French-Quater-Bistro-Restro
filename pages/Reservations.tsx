
import React, { useState } from 'react';
import { Calendar, Users, Clock, Phone, Mail, CheckCircle } from 'lucide-react';
import { Theme } from '../types';

const Reservations: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  if (submitted) {
    return (
      <div className={`py-32 flex items-center justify-center transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
        <div className="text-center p-12 rounded-3xl bg-white/5 max-w-md mx-auto">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-4">Reservation Confirmed!</h2>
          <p className="opacity-70 mb-8">
            Thank you, {formData.name}. We've sent a confirmation email for your table for {formData.guests} guests on {formData.date}.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md font-bold transition-all"
          >
            MAKE ANOTHER BOOKING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-20 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Book Your Table</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Join us for an unforgettable evening in the French Quarter. For parties larger than 8, please call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Form */}
          <div className={`p-8 md:p-12 rounded-3xl shadow-xl transition-colors ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Name</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Email</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Phone</label>
                  <input 
                    required 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                    placeholder="(504) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Guests</label>
                  <div className="relative">
                    <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors appearance-none ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Date</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
                    <input 
                      required 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Time</label>
                  <div className="relative">
                    <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
                    <select 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors appearance-none ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                    >
                      {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Special Requests</label>
                <textarea 
                  rows={4}
                  value={formData.requests}
                  onChange={(e) => setFormData({...formData, requests: e.target.value})}
                  className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none transition-colors resize-none ${theme === Theme.DARK ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-gray-50 border-gray-200'}`}
                  placeholder="Anniversary, birthday, food allergies..."
                />
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-md font-bold text-lg transition-all shadow-lg transform active:scale-[0.98]">
                CONFIRM RESERVATION
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif mb-6">Planning a Special Event?</h3>
              <p className="opacity-70 text-lg leading-relaxed mb-6">
                Our private dining balcony overlooks Royal Street, providing the perfect atmosphere for weddings, corporate events, and milestone celebrations.
              </p>
              <div className="flex items-center space-x-4 text-amber-500 font-bold">
                <Phone size={20} />
                <span>Call (504) 555-0123 for Events</span>
              </div>
            </div>

            <div className={`p-8 rounded-3xl ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">General Booking Info</h4>
              <ul className="space-y-4 opacity-80">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-500">•</span>
                  <span>Tables are held for 15 minutes past the reservation time.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-500">•</span>
                  <span>We offer a 2-hour dining window for peak service times.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-500">•</span>
                  <span>Cancellations are requested 24 hours in advance.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Reservations;
