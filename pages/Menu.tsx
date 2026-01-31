
import React, { useState } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '../constants.tsx';
import { Theme } from '../types';

const MenuPage: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Appetizers', 'Mains', 'Desserts', 'Drinks'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className={`py-20 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Menu</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto mb-8">
            Experience the soulful symphony of Creole and Cajun spices, infused with the vibrant rhythm of the Caribbean.
          </p>
          <button className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-bold transition-all shadow-md">
            <Download size={18} />
            <span>DOWNLOAD PDF MENU</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-amber-500 border-amber-500 text-white' 
                  : theme === Theme.DARK 
                    ? 'border-zinc-700 text-gray-400 hover:border-amber-500 hover:text-amber-500' 
                    : 'border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-500'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col sm:flex-row gap-6 p-6 rounded-2xl transition-all hover:shadow-xl ${
                theme === Theme.DARK ? 'bg-zinc-900' : 'bg-white'
              }`}
            >
              <div className="sm:w-40 h-40 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-bold text-amber-500">{item.name}</h3>
                  <span className="text-xl font-bold font-serif">{item.price}</span>
                </div>
                <p className="opacity-70 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest opacity-50">
                  <span className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Footer */}
        <div className="mt-24 text-center p-12 border-2 border-dashed border-amber-500/20 rounded-3xl">
          <p className="opacity-60 text-sm max-w-xl mx-auto italic">
            * Please inform your server of any allergies or dietary restrictions. Many of our dishes can be prepared vegetarian or gluten-free upon request. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MenuPage;
