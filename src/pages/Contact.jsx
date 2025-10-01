import Hero from '../components/sections/Hero';
import Section from '../components/sections/Section';
import ContactForm from '../components/forms/ContactForm';
import MapEmbed from '../components/sections/MapEmbed';
import { siteConfig } from '../config/site.config';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Téléphone',
      value: siteConfig.contact.phone,
      icon: '📞',
      action: () => window.location.href = `tel:${siteConfig.contact.phone}`
    },
    {
      title: 'Email',
      value: siteConfig.contact.email,
      icon: '✉️',
      action: () => window.location.href = `mailto:${siteConfig.contact.email}`
    },
    {
      title: 'Adresse',
      value: siteConfig.contact.address.full,
      icon: '📍',
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`, '_blank')
    }
  ];

  const scheduleData = [
    { day: 'Lundi', hours: siteConfig.hours.monday },
    { day: 'Mardi', hours: siteConfig.hours.tuesday },
    { day: 'Mercredi', hours: siteConfig.hours.wednesday },
    { day: 'Jeudi', hours: siteConfig.hours.thursday },
    { day: 'Vendredi', hours: siteConfig.hours.friday },
    { day: 'Samedi', hours: siteConfig.hours.saturday },
    { day: 'Dimanche', hours: siteConfig.hours.sunday }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contactez-nous"
        subtitle="Prise de rendez-vous"
        description="Nous sommes à votre disposition pour répondre à vos questions et programmer votre consultation."
        primaryCTA={{
          text: 'Appeler maintenant',
          onClick: () => window.location.href = `tel:${siteConfig.contact.phone}`
        }}
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
      />

      {/* Informations de contact */}
      <Section
        title="Nos coordonnées"
        subtitle="Facilement joignables"
        description="Plusieurs moyens de nous contacter selon votre préférence. Nous vous répondons rapidement."
        titleCenter
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={info.action}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{info.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Formulaire et horaires */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <ContactForm />

          {/* Horaires et informations */}
          <div className="space-y-8">
            {/* Horaires d'ouverture */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ℹ️ Informations pratiques
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parking gratuit</h4>
                    <p className="text-gray-600">Places disponibles devant le cabinet</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accès PMR</h4>
                    <p className="text-gray-600">Cabinet accessible aux personnes à mobilité réduite</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transports</h4>
                    <p className="text-gray-600">Arrêt de bus "République" à 2 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Carte Vitale</h4>
                    <p className="text-gray-600">Télétransmission directe à votre mutuelle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Plan d'accès */}
      <Section
        title="Plan d'accès"
        subtitle="Comment nous trouver"
        description="Notre cabinet est situé au cœur de Lens, facilement accessible en voiture et en transports en commun."
        titleCenter
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carte */}
          <div className="lg:col-span-2">
            <MapEmbed
              address={siteConfig.contact.address.full}
              height="500px"
              className="w-full"
            />
          </div>

          {/* Indications */}
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-semibold text-primary-800 mb-3 flex items-center">
                🚗 En voiture
              </h4>
              <p className="text-primary-700 text-sm leading-relaxed">
                Depuis l&apos;A21, sortie Lens Centre. Suivre "Centre-Ville" puis "République". 
                Le cabinet se situe au 12 rue de la République, parking gratuit disponible.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                🚌 En transport
              </h4>
              <p className="text-green-700 text-sm leading-relaxed">
                Lignes de bus 1, 3, et 7 - Arrêt "République". 
                Le cabinet est à 2 minutes à pied de l&apos;arrêt.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                🚂 En train
              </h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Gare SNCF de Lens à 10 minutes en bus ou taxi. 
                Liaison directe depuis Lille, Arras et Paris.
              </p>
            </div>

            <div className="bg-white border-2 border-primary-200 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">
                📍 Repères visuels
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Face à la pharmacie Centrale</li>
                <li>• À côté de la boulangerie Martin</li>
                <li>• Plaque "Cabinet Dentaire Sourire" visible</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Contact */}
      <Section
        title="Questions fréquentes"
        subtitle="FAQ"
        description="Les réponses aux questions les plus courantes concernant la prise de rendez-vous."
        titleCenter
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                🕐 Comment prendre rendez-vous ?
              </h4>
              <p className="text-gray-600 text-sm">
                Par téléphone au {siteConfig.contact.phone} ou via notre formulaire de contact. 
                Nous vous rappelons dans les 2h ouvrées.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                ⏱️ Délai pour un rendez-vous ?
              </h4>
              <p className="text-gray-600 text-sm">
                Consultation de routine : sous 1 semaine. 
                Urgences : prise en charge le jour même si possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                💳 Quels moyens de paiement ?
              </h4>
              <p className="text-gray-600 text-sm">
                Carte bancaire, espèces, chèque, virement. 
                Tiers payant disponible selon votre mutuelle.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                🚫 Comment annuler un rendez-vous ?
              </h4>
              <p className="text-gray-600 text-sm">
                Appelez-nous au moins 24h à l&apos;avance. 
                En cas d&apos;annulation tardive, des frais peuvent s&apos;appliquer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                👶 Consultation enfant ?
              </h4>
              <p className="text-gray-600 text-sm">
                Première consultation dès 3 ans recommandée. 
                Approche ludique et rassurante adaptée aux enfants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                📋 Que préparer pour la consultation ?
              </h4>
              <p className="text-gray-600 text-sm">
                Carte vitale, mutuelle, ordonnances en cours, 
                et liste des médicaments si traitement médical.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;