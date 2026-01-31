
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, ChefHat, MessageSquare, Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import MenuPage from './pages/Menu';
import Reservations from './pages/Reservations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ChefAssistant from './components/ChefAssistant';
import { Theme } from './types';

const Navbar = ({ theme, toggleTheme }: { theme: Theme, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${theme === Theme.DARK ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100'} sticky top-0 z-50 border-b shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold font-serif ${theme === Theme.DARK ? 'text-white' : 'text-gray-900'}`}>
                French Quarter <span className="text-amber-500">Bistro</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path 
                    ? 'text-amber-500 font-semibold' 
                    : theme === Theme.DARK ? 'text-gray-300 hover:text-amber-400' : 'text-gray-600 hover:text-amber-500'
                } transition-colors text-sm uppercase tracking-widest`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === Theme.DARK ? 'bg-zinc-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === Theme.DARK ? 'bg-zinc-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={theme === Theme.DARK ? 'text-white' : 'text-gray-900'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${theme === Theme.DARK ? 'bg-zinc-900 border-t border-zinc-800' : 'bg-white border-t border-gray-100'} transition-colors duration-300`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path 
                  ? 'text-amber-500 bg-amber-50/10' 
                  : theme === Theme.DARK ? 'text-gray-300 hover:bg-zinc-800' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ theme }: { theme: Theme }) => {
  return (
    <footer className={`${theme === Theme.DARK ? 'bg-zinc-950 text-white' : 'bg-zinc-900 text-gray-100'} pt-16 pb-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-serif font-bold mb-6">French Quarter Bistro</h3>
          <p className="text-gray-400 mb-6 italic">
            "Bringing the vibrant soul of New Orleans to your table with every bite."
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-amber-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-amber-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-amber-500 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest">Location</h4>
          <p className="text-gray-400">123 Royal Street<br />New Orleans, LA 70130</p>
          <p className="text-gray-400 mt-4">(504) 555-0123</p>
          <p className="text-gray-400">bonjour@fqbistro.com</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest">Hours</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Mon-Thu: 11:00 AM - 10:00 PM</li>
            <li>Fri-Sat: 11:00 AM - 11:30 PM</li>
            <li>Sun: 10:00 AM - 9:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest">Newsletter</h4>
          <p className="text-gray-400 mb-4">Join our list for special event invitations and seasonal menus.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-zinc-800 text-white border-none focus:ring-2 focus:ring-amber-500 rounded-l-md px-4 py-2 w-full"
            />
            <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md transition-colors font-bold">JOIN</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} French Quarter Bistro. All rights reserved.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === Theme.DARK);
    document.body.classList.toggle('bg-zinc-950', theme === Theme.DARK);
    document.body.classList.toggle('bg-bistro-cream', theme === Theme.LIGHT);
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${theme === Theme.DARK ? 'dark' : ''}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/menu" element={<MenuPage theme={theme} />} />
            <Route path="/reservations" element={<Reservations theme={theme} />} />
            <Route path="/gallery" element={<Gallery theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
        <ChefAssistant theme={theme} />
      </div>
    </Router>
  );
};

export default App;
