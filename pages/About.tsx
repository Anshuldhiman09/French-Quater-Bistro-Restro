
import React from 'react';
import { Theme } from '../types';

const About: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div className={`py-20 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-4">Our Heritage</h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">A Tale of Two Cities & The Caribbean Sea</h1>
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              Founded in 1994 by Chef Andre Broussard and his wife Elena, French Quarter Bistro began as a small dream on the cobblestone streets of New Orleans. Andre, a native of St. James Parish, brought his deep Cajun roots, while Elena, born in Martinique, infused the menu with vibrant Caribbean spices and techniques.
            </p>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Together, they created a unique culinary bridge: Creole sophistication, Cajun boldness, and Caribbean flair. Today, our bistro remains a family-owned gem, dedicated to preserving the authentic spirit of NOLA hospitality.
            </p>
            <div className="flex items-center space-x-4 italic text-amber-500 font-serif text-xl">
              <span>— Chef Andre & Elena Broussard</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
              alt="Founders" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Philosophy / Culinary Section */}
        <div className={`p-12 md:p-20 rounded-3xl mb-32 transition-colors ${theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white shadow-xl'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Our Culinary Philosophy</h2>
            <p className="text-amber-500 font-serif italic text-xl">"Low and slow, with heart and soul."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 font-serif text-3xl font-bold">1</div>
              <h3 className="text-2xl font-serif mb-4">The Holy Trinity</h3>
              <p className="opacity-70 leading-relaxed">
                The foundation of every great dish. Onions, bell peppers, and celery, sautéed to perfection to release the aromatic soul of our kitchen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 font-serif text-3xl font-bold">2</div>
              <h3 className="text-2xl font-serif mb-4">The Dark Roux</h3>
              <p className="opacity-70 leading-relaxed">
                We take our time. Our roux is stirred for hours until it reaches a deep chocolate hue, providing the nutty richness essential to authentic gumbo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 font-serif text-3xl font-bold">3</div>
              <h3 className="text-2xl font-serif mb-4">Caribbean Infusion</h3>
              <p className="opacity-70 leading-relaxed">
                Scotch bonnet peppers, allspice, and fresh ginger. We layer Caribbean warmth over Louisiana tradition for a flavor profile found nowhere else.
              </p>
            </div>
          </div>
        </div>

        {/* Team / Culture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1577106212294-199eafca454a?auto=format&fit=crop&q=80&w=1200" 
              alt="Kitchen staff" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">A Culture of Excellence</h2>
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              From our line cooks to our servers, the team at French Quarter Bistro is a family. We believe that a happy kitchen produces happy food. 
            </p>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Every staff member is trained in the history of the dishes they serve, ensuring that when you ask about the origins of our Crawfish Etouffée, you receive a story, not just a description.
            </p>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="bg-amber-500/5 p-6 rounded-xl border border-amber-500/10">
                <span className="block text-4xl font-serif text-amber-500 font-bold mb-1">30+</span>
                <span className="text-sm opacity-60 uppercase tracking-widest">Years of Tradition</span>
              </div>
              <div className="bg-amber-500/5 p-6 rounded-xl border border-amber-500/10">
                <span className="block text-4xl font-serif text-amber-500 font-bold mb-1">100%</span>
                <span className="text-sm opacity-60 uppercase tracking-widest">Scratch Kitchen</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
