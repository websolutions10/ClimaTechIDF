import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Galerie', id: 'gallery' },
    { name: 'Blog', id: 'blog' },
    { name: 'À propos', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <a href="tel:0621006333" className="hover:text-red-600 transition-colors duration-200">06 21 00 63 33</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <a href="mailto:climatecidf@gmail.com" className="hover:text-red-600 transition-colors duration-200">climatecidf@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.instagram.com/climatecidf/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61568731857705" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span>Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Main nav */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => onPageChange('home')}
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img
                  src="/images/gallery/logo1.jpg"
                  alt="Climatec Logo"
                  className="h-12 w-auto object-contain"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    window.scrollTo(0, 0);
                  }}
                  className={`font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => onPageChange('contact')}
              className="hidden md:inline-flex bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105"
            >
              Devis Gratuit
            </button>

            {/* Mobile social icons and menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.instagram.com/climatecidf/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61568731857705" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  onPageChange('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
              >
                Devis Gratuit
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="/images/gallery/logo1.jpg"
                alt="Climatec Logo"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-gray-300 mb-4">
                Votre spécialiste en climatisation en Île-de-France. Installation, maintenance et dépannage de tous types de systèmes de climatisation.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span>06 21 00 63 33</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Installation climatisation</li>
                <li>Maintenance préventive</li>
                <li>Dépannage d'urgence</li>
                <li>Pompe à chaleur</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-red-400" />
                  <a href="mailto:climatecidf@gmail.com" className="hover:text-red-300 transition-colors duration-200">climatecidf@gmail.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-red-400" />
                  <a href="tel:0621006333" className="hover:text-red-300 transition-colors duration-200">06 21 00 63 33</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <span>Île-de-France</span>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <a 
                    href="https://www.instagram.com/climatecidf/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61568731857705" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Climatec. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;