import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Comment Choisir sa Climatisation : Guide Complet',
      excerpt: 'Découvrez les différents types de climatiseurs et leurs avantages pour faire le bon choix selon vos besoins et votre logement.',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-200 pb-2">Types de Climatiseurs</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">Le choix d'un système de climatisation dépend de plusieurs facteurs : la surface à climatiser, le type de logement, et vos besoins spécifiques.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h4 class="text-xl font-semibold text-red-800 mb-3">Climatiseur Split Mural</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Idéal pour 1 à 3 pièces</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Installation simple et rapide</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Bon rapport qualité-prix</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Contrôle individuel par pièce</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 class="text-xl font-semibold text-blue-800 mb-3">Climatisation Gainable</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span>Solution discrète et esthétique</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span>Climatisation de toute la maison</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span>Répartition homogène de l'air</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span>Idéal pour les constructions neuves</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h4 class="text-xl font-semibold text-green-800 mb-3">Pompe à Chaleur Air/Air</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Chauffage et climatisation</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Très économique à l'usage</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Solution écologique</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Éligible aux aides financières</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
          <p class="text-lg font-medium"><strong>💡 Notre conseil d'expert :</strong> Faites appel à un professionnel pour une étude thermique personnalisée et gratuite de vos besoins.</p>
        </div>
      `,
      author: 'ClimaTechIDF',
      date: '2025-01-15',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Conseils'
    },
    {
      id: 2,
      title: 'L\'Importance d\'une Installation Professionnelle',
      excerpt: 'Une installation de climatisation mal réalisée peut coûter cher. Découvrez pourquoi faire appel à un professionnel certifié.',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-200 pb-2">Pourquoi Faire Appel à un Professionnel ?</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">L'installation d'une climatisation ne s'improvise pas. Une mauvaise installation peut avoir des conséquences coûteuses sur le long terme.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h4 class="text-xl font-semibold text-red-800 mb-3">Les Risques d'une Mauvaise Installation</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Surconsommation électrique jusqu'à 30%</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Pannes prématurées et coûteuses</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Performances dégradées</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Annulation de la garantie constructeur</li>
              <li class="flex items-start"><span class="text-red-600 mr-2">•</span>Risques de fuites de fluide frigorigène</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h4 class="text-xl font-semibold text-green-800 mb-3">L'Expertise Professionnelle</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Dimensionnement précis selon la pièce</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Emplacement optimal des unités</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Étanchéité parfaite du circuit frigorifique</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Mise en service et tests complets</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Respect des normes en vigueur</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
          <p class="text-lg font-medium"><strong>🏆 Chez Climatec,</strong> nous garantissons une installation dans les règles de l'art avec certification et garantie complète.</p>
        </div>
      `,
      author: 'ClimaTechIDF',
      date: '2025-01-10',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/5691616/pexels-photo-5691616.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Installation'
    },
    {
      id: 3,
      title: 'Guide d\'Entretien de Votre Climatisation',
      excerpt: 'Les gestes simples et la maintenance professionnelle pour optimiser les performances de votre climatisation.',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-200 pb-2">Entretien : La Clé de la Longévité</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">Un entretien régulier permet de maintenir les performances optimales et d'éviter les pannes coûteuses. Voici comment bien entretenir votre climatisation.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 class="text-xl font-semibold text-blue-800 mb-3">Ce Que Vous Pouvez Faire</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Mensuel</strong> - Nettoyage des filtres à air</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Régulier</strong> - Dépoussiérage des grilles</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Visuel</strong> - Vérification évacuation condensats</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Saisonnier</strong> - Nettoyage unité extérieure</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h4 class="text-xl font-semibold text-green-800 mb-3">Maintenance Professionnelle Annuelle</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Contrôle complet du circuit frigorifique</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Nettoyage approfondi des échangeurs</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Vérifications électriques et sécurité</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Tests de performance et réglages</li>
              <li class="flex items-start"><span class="text-green-600 mr-2">•</span>Rapport détaillé avec recommandations</li>
            </ul>
          </div>
        </div>

        <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600 mb-8">
          <h4 class="text-xl font-semibold text-orange-800 mb-3">Quand Nous Appeler ?</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-orange-600 mr-2">•</span>Baisse notable de performance</li>
            <li class="flex items-start"><span class="text-orange-600 mr-2">•</span>Bruits inhabituels</li>
            <li class="flex items-start"><span class="text-orange-600 mr-2">•</span>Odeurs suspectes</li>
            <li class="flex items-start"><span class="text-orange-600 mr-2">•</span>Augmentation de la consommation</li>
            <li class="flex items-start"><span class="text-orange-600 mr-2">•</span>Fuite d'eau ou de fluide</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
          <p class="text-lg font-medium"><strong>🔧 Nos contrats de maintenance</strong> incluent une visite annuelle complète et un dépannage prioritaire pour nos clients.</p>
        </div>
      `,
      author: 'Climatec',
      date: '2025-01-05',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Maintenance'
    }
  ];

  const [selectedArticle, setSelectedArticle] = React.useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog & Conseils</h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Découvrez nos conseils d'experts, guides pratiques et actualités 
              pour tout savoir sur la climatisation.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {selectedArticle === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition-colors duration-200">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="text-red-600 font-semibold flex items-center space-x-2 hover:text-red-700 transition-colors duration-200">
                      <span>Lire l'article</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Article Detail View */
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="mb-8 text-red-600 font-semibold flex items-center space-x-2 hover:text-red-700 transition-colors duration-200"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Retour aux articles</span>
              </button>

              {(() => {
                const article = articles.find(a => a.id === selectedArticle);
                if (!article) return null;

                return (
                  <article className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    
                    <div className="p-8 md:p-12">
                      <div className="mb-6">
                        <span className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                      
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                      </h1>
                      
                      <div className="flex items-center space-x-6 text-gray-500 mb-8 pb-8 border-b">
                        <div className="flex items-center space-x-2">
                          <User className="h-5 w-5" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5" />
                          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div 
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed blog-content"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                      
                      <div className="mt-12 pt-8 border-t bg-gray-50 -mx-8 md:-mx-12 px-8 md:px-12 py-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Besoin de conseils personnalisés ?
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Nos experts sont à votre disposition pour répondre à vos questions 
                          et vous accompagner dans votre projet de climatisation.
                        </p>
                        <button 
                          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                        >
                          Nous Contacter
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })()}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      {selectedArticle === null && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Restez Informé
              </h2>
              <p className="text-gray-600 mb-8">
                Recevez nos derniers conseils et actualités directement dans votre boîte mail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}