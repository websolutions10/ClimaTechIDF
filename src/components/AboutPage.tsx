import React from 'react';
import { Award, Users, Clock, Star, CheckCircle, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Award className="h-8 w-8 text-red-600" />, value: '10+', label: 'Années d\'expérience' },
    { icon: <Users className="h-8 w-8 text-red-600" />, value: '500+', label: 'Clients satisfaits' },
    { icon: <Clock className="h-8 w-8 text-red-600" />, value: '24h', label: 'Délai de réponse' },
    { icon: <Star className="h-8 w-8 text-red-600" />, value: '4.9/5', label: 'Note moyenne' },
  ];

  const values = [
    {
      title: 'Expertise Technique',
      description: 'Formés aux dernières technologies, nos techniciens maîtrisent tous types d\'installations.',
      icon: <Award className="h-12 w-12 text-red-600" />
    },
    {
      title: 'Service Client',
      description: 'À votre écoute avant, pendant et après l\'installation pour garantir votre satisfaction.',
      icon: <Users className="h-12 w-12 text-red-600" />
    },
    {
      title: 'Réactivité',
      description: 'Intervention rapide en Île-de-France avec un service d\'urgence disponible 7j/7.',
      icon: <Clock className="h-12 w-12 text-red-600" />
    }
  ];

  const detailedTestimonials = [
    {
      name: 'Marie Dubois',
      location: 'Créteil (94)',
      project: 'Installation climatisation résidentielle',
      rating: 5,
      text: 'Climatec a installé 3 climatiseurs dans notre maison. Le travail a été impeccable du début à la fin. L\'équipe est arrivée à l\'heure, a travaillé proprement et a pris le temps de nous expliquer le fonctionnement. Les passages de gaines ont été faits discrètement et les finitions sont parfaites. Nous recommandons vivement !',
      date: '2024-12-15'
    },
    {
      name: 'Pierre Martin',
      location: 'Évry-Courcouronnes (91)',
      project: 'Maintenance annuelle bureau',
      rating: 5,
      text: 'Nous faisons appel à Climatec depuis 3 ans pour la maintenance de nos bureaux. Service irréprochable, techniciens compétents et tarifs honnêtes. Ils interviennent rapidement en cas de panne et nous prodiguent de bons conseils pour optimiser nos installations. Relation de confiance établie !',
      date: '2024-11-28'
    },
    {
      name: 'Sophie Laurent',
      location: 'Melun (77)',
      project: 'Dépannage d\'urgence',
      rating: 5,
      text: 'Panne de climatisation en pleine canicule ! J\'ai appelé Climatec le matin et un technicien était chez moi l\'après-midi même. Diagnostic rapide, réparation efficace et prix raisonnable. Un grand merci pour ce dépannage express qui nous a sauvé de cette chaleur !',
      date: '2024-10-10'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">À Propos de Climatec</h1>
            <p className="text-lg sm:text-xl text-red-100 leading-relaxed">
              Depuis plus de 10 ans, nous sommes votre partenaire de confiance pour tous vos besoins 
              en climatisation en Île-de-France. Expertise, qualité et service client au cœur de nos valeurs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Climatec est née de la passion d'un professionnel expérimenté pour les métiers 
                  du froid et de la climatisation. Installé en Île-de-France depuis plus de 10 ans, 
                  nous avons su nous imposer comme une référence dans notre domaine.
                </p>
                <p>
                  Notre expertise s'est construite au fil des années à travers des formations continues 
                  et une veille technologique constante. Nous travaillons exclusivement avec les 
                  meilleures marques du marché pour garantir à nos clients des installations durables 
                  et performantes.
                </p>
                <p>
                  Aujourd'hui, ce sont plus de 500 clients qui nous font confiance pour leurs projets 
                  de climatisation, de l'installation à la maintenance, en passant par le dépannage d'urgence.
                </p>
              </div>
            </div>
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <img 
                src="https://images.pexels.com/photos/5691616/pexels-photo-5691616.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Équipe Climatec"
                className="rounded-xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-red-600">Depuis 2014</div>
                <div className="text-gray-600">À votre service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre travail au quotidien pour vous offrir 
              le meilleur service en climatisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Qualifications</h2>
            <p className="text-xl text-gray-600">Des garanties pour votre tranquillité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Certification QualiPAC',
              'Habilitation manipulation fluides frigorigènes',
              'Assurance décennale',
              'Certification RGE'
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Détaillés</h2>
            <p className="text-xl text-gray-600">L'expérience de nos clients avec Climatec</p>
          </div>

          <div className="space-y-12">
            {detailedTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 md:p-12">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-red-600 font-medium">{testimonial.project}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="text-sm text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Rejoignez Nos Clients Satisfaits</h2>
          <p className="text-xl mb-8 text-red-100">
            Faites confiance à notre expertise pour votre projet de climatisation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <a href="tel:0621006333">06 21 00 63 33</a>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Demander un Devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;