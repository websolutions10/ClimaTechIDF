import React from 'react';
import { Wrench, Shield, Clock, ThermometerSun, Snowflake, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      title: 'Installation de Climatisation',
      description: 'Installation professionnelle de tous types de systèmes de climatisation pour particuliers et professionnels.',
      features: [
        'Étude thermique gratuite',
        'Climatiseurs split muraux',
        'Climatiseurs gainables',
        'Systèmes multi-split',
        'Pompes à chaleur air/air',
        'Mise en service complète'
      ],
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Maintenance Préventive',
      description: 'Maintenance régulière pour garantir la longévité et l\'efficacité de vos équipements.',
      features: [
        'Contrat de maintenance annuel',
        'Nettoyage des filtres',
        'Vérification du fluide frigorigène',
        'Contrôle électrique',
        'Optimisation des performances',
        'Rapport détaillé après intervention'
      ],
      image: 'https://images.pexels.com/photos/5691616/pexels-photo-5691616.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Clock className="h-12 w-12 text-red-600" />,
      title: 'Dépannage d\'Urgence',
      description: 'Service de dépannage rapide 7j/7 pour tous vos problèmes de climatisation.',
      features: [
        'Intervention 7j/7',
        'Diagnostic rapide',
        'Réparation sur place',
        'Pièces détachées en stock',
        'Tarifs transparents',
        'Garantie sur les réparations'
      ],
      image: 'https://images.pexels.com/photos/5696045/pexels-photo-5696045.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const climatisationTypes = [
    {
      icon: <ThermometerSun className="h-8 w-8 text-orange-500" />,
      title: 'Climatiseur Split Mural',
      description: 'Solution idéale pour climatiser une ou plusieurs pièces',
      price: 'Sur devis'
    },
    {
      icon: <Snowflake className="h-8 w-8 text-blue-500" />,
      title: 'Climatisation Gainable',
      description: 'Système discret intégré dans les combles ou faux plafonds',
      price: 'Sur devis'
    },
    {
      icon: <Settings className="h-8 w-8 text-green-500" />,
      title: 'Pompe à Chaleur',
      description: 'Solution écologique pour chauffage et climatisation',
      price: 'Sur devis'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-lg sm:text-xl text-red-100 leading-relaxed">
              Une expertise complète en climatisation pour répondre à tous vos besoins, 
              de l'installation à la maintenance, en passant par le dépannage d'urgence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-xl shadow-2xl w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Climatization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types de Climatisation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous installons et maintenons tous types de systèmes de climatisation 
              adaptés à vos besoins et votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {climatisationTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <div className="text-2xl font-bold text-red-600 mb-4">{type.price}</div>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                  className="w-full border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                  En savoir plus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600">De la demande de devis à la mise en service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Demande de devis', description: 'Contactez-nous pour une étude gratuite' },
              { step: '02', title: 'Visite technique', description: 'Évaluation de vos besoins sur site' },
              { step: '03', title: 'Installation', description: 'Pose professionnelle par nos experts' },
              { step: '04', title: 'Mise en service', description: 'Test et formation à l\'utilisation' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Besoin d'un Devis ?</h2>
          <p className="text-xl mb-8 text-red-100">Nos experts vous conseillent gratuitement</p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Demander un Devis Gratuit
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;