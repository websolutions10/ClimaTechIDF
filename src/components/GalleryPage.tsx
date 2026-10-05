import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Toutes les réalisations' },
    { id: 'residential', name: 'Résidentiel' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'heatpump', name: 'Pompes à chaleur' }
  ];

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: 'Climatisation Split Mural - Villa',
      location: 'Draveil (91)',
      description: 'Installation de 3 unités split murales dans une villa de 120m²',
      image: '/images/gallery/villa-draveil.jpg',
      // La clim est en haut de la photo (portrait) : on cadre dessus
      objectPosition: '50% 27%',
      lightboxFit: 'contain',
      details: 'Système multi-split Daikin avec 3 unités intérieures. Installation soignée avec passage des liaisons frigorifiques en goulotte.'
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Climatisation Péniche - Concorde Atlantique',
      location: 'Paris (75)',
      description: 'Installation climatisation pour péniche événementielle',
      image: '/images/gallery/peniche-concorde.jpg',
      details: 'Installation complète de climatisation sur la péniche Concorde Atlantique. Système adapté aux contraintes nautiques et événementielles.'
    },
    {
      id: 3,
      category: 'heatpump',
      title: 'Pompe à Chaleur Air/Air',
      location: 'Corbeil-Essonnes (91)',
      description: 'PAC réversible pour maison de 150m²',
      image: '/images/gallery/pac-corbeil.jpg',
      details: 'Pompe à chaleur Mitsubishi Electric avec 4 unités intérieures. Solution écologique et économique.'
    },
    {
      id: 4,
      category: 'residential',
      title: 'Climatisation Appartement',
      location: 'Créteil (94)',
      description: 'Installation dans appartement T4',
      image: '/images/gallery/appartement-creteil.jpg',
      details: 'Système bi-split avec unités salon et chambre parentale. Installation discrète et silencieuse.'
    },
    {
      id: 5,
      category: 'residential',
      title: 'Maintenance Annuelle Climatisation',
      location: 'Draveil (91)',
      description: 'Maintenance préventive complète d\'une installation résidentielle',
      image: '/images/gallery/maintenance-draveil.jpg',
      details: 'Maintenance annuelle complète : nettoyage des filtres, vérification du fluide frigorigène, contrôle électrique et optimisation des performances.'
    },
    {
      id: 6,
      category: 'residential',
      title: 'Maison Neuve - RT2012',
      location: 'Brunoy (91)',
      description: 'Installation complète maison neuve',
      image: '/images/gallery/maison-brunoy.jpg',
      details: 'Système gainable haute efficacité énergétique conforme RT2012 avec régulation zone par zone.'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredProjects.length - 1);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Notre Galerie</h1>
            <p className="text-lg sm:text-xl text-red-100 leading-relaxed">
              Découvrez nos réalisations en climatisation à travers l'Île-de-France. 
              Chaque projet est unique et adapté aux besoins spécifiques de nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ objectPosition: project.objectPosition ?? 'center' }}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium">Cliquer pour agrandir</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            {/* Image and details */}
            <div className="bg-white rounded-lg overflow-hidden max-w-6xl">
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                style={{ objectPosition: filteredProjects[selectedImage].objectPosition ?? 'center' }}
                className={`w-full h-[60vh] max-h-[600px] ${
                  filteredProjects[selectedImage].lightboxFit === 'contain'
                    ? 'object-contain bg-gray-100'
                    : 'object-cover'
                }`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredProjects[selectedImage].title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{filteredProjects[selectedImage].location}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {filteredProjects[selectedImage].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Votre Projet en Images</h2>
          <p className="text-xl mb-8 text-red-100">
            Rejoignez nos clients satisfaits et réalisez votre projet de climatisation
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Demander un Devis</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;