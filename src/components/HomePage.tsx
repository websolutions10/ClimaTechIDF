import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Phone, Wrench, Shield, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-red-600" />,
      title: 'Installation',
      description: 'Installation professionnelle de tous types de climatiseurs'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Maintenance',
      description: 'Maintenance préventive pour optimiser les performances'
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: 'Dépannage',
      description: 'Intervention rapide 7j/7 pour vos urgences'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      location: 'Créteil',
      rating: 5,
      text: 'Installation impeccable, travail soigné et équipe très professionnelle. Je recommande vivement !'
    },
    {
      name: 'Pierre Martin',
      location: 'Évry',
      rating: 5,
      text: 'Excellent service, devis transparent et installation dans les temps. Très satisfait du résultat.'
    },
    {
      name: 'Sophie Laurent',
      location: 'Melun',
      rating: 5,
      text: 'Maintenance annuelle toujours parfaite, équipe ponctuelle et compétente.'
    }
  ];

  const recentProjects = [
    {
      image: '/images/project-1.jpg',
      title: 'Climatisation résidentielle',
      location: 'Maison individuelle - Draveil'
    },
    {
      image: '/images/project-2.jpg',
      title: 'Installation commerciale', 
      location: 'Péniche Concorde Atlantique'
    },
    {
      image: '/images/project-3.jpg',
      title: 'Pompe à chaleur',
      location: 'Villa - Corbeil-Essonnes'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6186/air-conditioner-machine-cooling-6186.jpg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        ></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Climatisation
              <span className="block text-red-400">Professionnelle</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">en Île-de-France</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Installation, maintenance et dépannage par des experts certifiés. 
              Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0621006333"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>06 21 00 63 33</span>
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Devis Gratuit</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise complète pour tous vos besoins en climatisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Dernières Réalisations</h2>
            <p className="text-xl text-gray-600">Découvrez quelques-uns de nos projets récents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoad={() => console.log(`Image loaded: ${project.image}`)}
                    onError={(e) => {
                      console.log(`Image failed to load: ${project.image}`);
                      console.log('Error:', e);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'gallery' }))}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Voir toute la galerie</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi Choisir Climatec ?</h2>
              <div className="space-y-4">
                {[
                  'Plus de 10 ans d\'expérience dans la climatisation',
                  'Certifications professionnelles à jour',
                  'Intervention rapide en Île-de-France',
                  'Devis gratuit et transparent',
                  'Garantie sur tous nos travaux',
                  'Service après-vente réactif'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5691616/pexels-photo-5691616.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Technicien climatisation"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-xl text-gray-600">Leur satisfaction est notre priorité</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-xl shadow-lg mx-auto max-w-2xl">
                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed italic text-center text-lg">"{testimonial.text}"</p>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentTestimonial === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Améliorer Votre Confort ?</h2>
          <p className="text-xl mb-8 text-red-100">Contactez-nous dès maintenant pour un devis gratuit et personnalisé</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0621006333"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>06 21 00 63 33</span>
            </a>
            <button 
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              <span>Demander un Devis</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;