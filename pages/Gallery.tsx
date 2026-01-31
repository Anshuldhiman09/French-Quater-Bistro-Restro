
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants.tsx';
import { Theme } from '../types';

const Gallery: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ['All', 'Interior', 'Food', 'Events'];

  const filteredImages = activeTab === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  return (
    <div className={`py-20 transition-colors ${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-bistro-cream text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Gallery</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            A glimpse into the life, heart, and soul of French Quarter Bistro.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2 border-b-2 transition-all font-bold ${
                activeTab === cat 
                  ? 'border-amber-500 text-amber-500' 
                  : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white" size={48} />
              </div>
              <div className="absolute bottom-4 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <span className="bg-amber-500/80 px-3 py-1 rounded text-xs uppercase tracking-widest">{img.category}</span>
                <p className="mt-2 text-lg">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={48} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full object-contain rounded shadow-2xl animate-in zoom-in duration-300" 
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
