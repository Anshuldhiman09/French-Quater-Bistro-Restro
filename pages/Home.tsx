
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Star, Clock, MapPin } from 'lucide-react';
import { MENU_ITEMS } from '../constants.tsx';
import { Theme } from '../types';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920',
    title: 'Authentic Creole & Cajun',
    subtitle: 'With Modern Caribbean Flair'
  },
  {
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1920',
    title: 'The Soul of New Orleans',
    subtitle: 'Right in the Heart of the City'
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920',
    title: 'Fresh Bayou Seafood',
    subtitle: 'From Water to Table Daily'
  }
];

const Home: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-black">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-amber-400 font-light mb-10 tracking-[0.2em] uppercase italic">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/reservations" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105">
                  RESERVE A TABLE
                </Link>
                <Link to="/menu" className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105">
                  VIEW MENU
                </Link>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors">
          <ChevronRight size={48} />
        </button>
      </section>

      {/* Stats/Quick Info */}
      <section className={`py-12 border-b transition-colors ${theme === Theme.DARK ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="bg-amber-500/10 p-3 rounded-full text-amber-500"><Star size={24} /></div>
              <div>
                <h4 className="font-bold">4.9 Star Rating</h4>
                <p className="text-sm opacity-70">2,500+ Happy Diners</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <div className="bg-amber-500/10 p-3 rounded-full text-amber-500"><Clock size={24} /></div>
              <div>
                <h4 className="font-bold">Open Daily</h4>
                <p className="text-sm opacity-70">11:00 AM - Late Night</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center md:justify-end">
              <div className="bg-amber-500/10 p-3 rounded-full text-amber-500"><MapPin size={24} /></div>
              <div>
                <h4 className="font-bold">French Quarter</h4>
                <p className="text-sm opacity-70">123 Royal Street, NOLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className={`py-24 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Chef's Signature Selections</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Experience the true flavors of New Orleans with our most beloved dishes, prepared daily with fresh, local ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {MENU_ITEMS.filter(item => item.featured).slice(0, 3).map(item => (
              <div key={item.id} className={`group rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'}`}>
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white font-bold py-1 px-3 rounded-full text-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3">{item.name}</h3>
                  <p className="opacity-70 mb-6 line-clamp-2">{item.description}</p>
                  <Link to="/menu" className="text-amber-500 font-bold flex items-center group-hover:underline">
                    FULL MENU <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/menu" className="inline-block border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-10 py-4 rounded-md font-bold transition-all">
              EXPLORE FULL MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
            alt="Bar interior" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">The Full French Quarter Experience</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed">
            From the soul-stirring notes of live jazz to the aromatic spice of our Gumbo, we provide more than just a meal. We provide a celebration of heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div>
              <h4 className="text-2xl font-serif text-amber-400 mb-4">Live Jazz</h4>
              <p className="opacity-70">Nightly performances by New Orleans' finest local musicians.</p>
            </div>
            <div>
              <h4 className="text-2xl font-serif text-amber-400 mb-4">Craft Cocktails</h4>
              <p className="opacity-70">Authentic Hurricanes and Sazeracs made with premium spirits.</p>
            </div>
            <div>
              <h4 className="text-2xl font-serif text-amber-400 mb-4">Private Events</h4>
              <p className="opacity-70">Elegant balcony seating for your most special celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={`py-24 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Voices of the Bistro</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", text: "The Jambalaya took me straight back to my childhood in Lafayette. Absolute perfection.", rating: 5 },
              { name: "Marcus L.", text: "Best Hurricane in the city. The live jazz was the cherry on top. A must-visit!", rating: 5 },
              { name: "Elena R.", text: "Elegant service with a warm, local touch. The Beignets are light as air.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className={`p-8 rounded-xl shadow-sm italic ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-gray-50'}`}>
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="opacity-80 mb-6 text-lg">"{review.text}"</p>
                <p className="font-bold text-amber-500">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
