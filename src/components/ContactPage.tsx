import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Impossible d'envoyer le message");
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        projectType: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nous Contacter</h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Une question ? Un projet ? Notre équipe est à votre disposition pour vous conseiller 
              et établir un devis gratuit adapté à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations de Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">06 21 00 63 33</p>
                    <p className="text-sm text-gray-500">Lun-Ven : 8h-18h, Sam : 9h-12h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:climatecidf@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors duration-200">climatecidf@gmail.com</a>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h3>
                    <p className="text-gray-600">Toute l'Île-de-France</p>
                    <p className="text-sm text-gray-500">Paris, 77, 78, 91, 92, 93, 94, 95</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Urgences</h3>
                    <p className="text-gray-600">Service 7j/7</p>
                    <p className="text-sm text-gray-500">Dépannage d'urgence</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Devis gratuit sous 24h</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">10+ années d'expérience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Garantie sur tous travaux</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Techniciens certifiés</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Demande de Devis Gratuit</h2>
                <p className="text-gray-600 mb-8">Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.</p>

                {isSubmitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
                      <p className="text-green-600 text-sm">Nous vous recontacterons dans les 24h.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">Erreur: {error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre nom et prénom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="01 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="installation">Installation neuve</option>
                        <option value="remplacement">Remplacement</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="depannage">Dépannage</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Objet de la demande
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Résumé de votre demande"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message détaillé *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder="Décrivez votre projet : type de logement, nombre de pièces à climatiser, contraintes particulières..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>{isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Zone d'Intervention</h2>
            <p className="text-lg sm:text-xl text-gray-600">Basés à Draveil, nous intervenons dans toute l'Île-de-France</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8!2d2.4144!3d48.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d9b9b9b9b9b9%3A0x9b9b9b9b9b9b9b9b!2sDraveil%2C%20France!5e0!3m2!1sfr!2sfr!4v1642000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Climatec - Draveil"
              ></iframe>
            </div>
            <div className="p-6 bg-red-50">
              <div className="flex items-center justify-center space-x-2 text-red-700">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Climatec - Draveil (91210)</span>
              </div>
              <p className="text-center text-gray-600 mt-2 text-sm">
                Zone d'intervention : Paris • Seine-et-Marne • Yvelines • Essonne • Hauts-de-Seine • Seine-Saint-Denis • Val-de-Marne • Val-d'Oise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Les réponses aux questions les plus courantes</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Combien coûte une installation de climatisation ?',
                answer: 'Le prix varie selon le type d\'installation, la surface et vos besoins. Comptez à partir de 800€ pour un split mural simple. Nous établissons un devis gratuit personnalisé.'
              },
              {
                question: 'Quelle est la durée d\'une installation ?',
                answer: 'Une installation simple (1-2 unités) prend généralement 1 journée. Pour des installations plus complexes, comptez 2-3 jours selon la configuration.'
              },
              {
                question: 'Proposez-vous un service de maintenance ?',
                answer: 'Oui, nous proposons des contrats de maintenance annuels incluant nettoyage, vérifications et optimisation de vos équipements pour prolonger leur durée de vie.'
              },
              {
                question: 'Intervenez-vous en urgence ?',
                answer: 'Oui, nous proposons un service de dépannage 7j/7 pour les urgences. Contactez-nous et nous interviendrons dans les plus brefs délais.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;