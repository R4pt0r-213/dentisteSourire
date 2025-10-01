import Hero from '../components/sections/Hero';
import Section from '../components/sections/Section';
import ServiceCard from '../components/sections/ServiceCard';
import Button from '../components/common/Button';
import { siteConfig } from '../config/site.config';

const Services = () => {
  const mainServices = [
    {
      title: 'Soins conservateurs',
      description: 'Préservation de vos dents naturelles avec des soins préventifs et curatifs adaptés à chaque situation.',
      icon: '🦷',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop',
      features: [
        'Traitement des caries avec matériaux biocompatibles',
        'Détartrage et polissage professionnel',
        'Soins des gencives et traitement parodontal',
        'Dévitalisation et traitement radiculaire',
        'Couronnes et bridges céramiques'
      ]
    },
    {
      title: 'Implantologie',
      description: 'Solutions durables et esthétiques pour remplacer vos dents manquantes avec un confort optimal.',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop',
      features: [
        'Implants unitaires en titane',
        'Bridges complets sur implants',
        'Prothèses amovibles stabilisées',
        'Greffe osseuse si nécessaire',
        'Suivi post-opératoire personnalisé'
      ]
    },
    {
      title: 'Orthodontie',
      description: 'Correction de l\'alignement dentaire pour enfants et adultes avec des techniques modernes et discrètes.',
      icon: '😊',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop',
      features: [
        'Bagues métalliques et céramiques',
        'Gouttières invisibles (Invisalign)',
        'Orthodontie linguale',
        'Traitement interceptif enfant',
        'Contention post-traitement'
      ]
    },
    {
      title: 'Esthétique dentaire',
      description: 'Embellissez votre sourire avec nos traitements esthétiques personnalisés et naturels.',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1559456272-312ca2c6bba1?w=400&h=250&fit=crop',
      features: [
        'Blanchiment professionnel',
        'Facettes céramiques ultra-fines',
        'Recontouring esthétique',
        'Composite esthétique',
        'Smile design numérique'
      ]
    },
    {
      title: 'Chirurgie orale',
      description: 'Interventions chirurgicales spécialisées réalisées dans des conditions optimales de sécurité.',
      icon: '🔪',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      features: [
        'Extraction des dents de sagesse',
        'Chirurgie parodontale',
        'Greffe gingivale',
        'Kyste et tumeur bénigne',
        'Chirurgie pré-implantaire'
      ]
    },
    {
      title: 'Pédodontie',
      description: 'Soins dentaires spécialisés pour enfants dans un environnement rassurant et ludique.',
      icon: '👶',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=250&fit=crop',
      features: [
        'Première consultation découverte',
        'Soins préventifs et fluor',
        'Traitement des caries lactéales',
        'Scellement des sillons',
        'Éducation à l\'hygiène bucco-dentaire'
      ]
    }
  ];

  const urgencies = [
    {
      title: 'Rage de dent',
      description: 'Soulagement immédiat de la douleur'
    },
    {
      title: 'Traumatisme dentaire',
      description: 'Prise en charge rapide des accidents'
    },
    {
      title: 'Abcès dentaire',
      description: 'Traitement d\'urgence des infections'
    },
    {
      title: 'Prothèse cassée',
      description: 'Réparation en urgence'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Nos services dentaires"
        subtitle="Excellence et innovation"
        description="Une gamme complète de soins dentaires pour toute la famille, avec des équipements de pointe et une approche personnalisée."
        primaryCTA={{
          text: 'Prendre rendez-vous',
          onClick: () => window.location.href = `tel:${siteConfig.contact.phone}`
        }}
        backgroundImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=600&fit=crop"
      />

      {/* Services principaux */}
      <Section
        title="Notre expertise à votre service"
        subtitle="Services complets"
        description="Des soins préventifs aux traitements les plus complexes, nous accompagnons votre santé dentaire."
        titleCenter
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Urgences dentaires */}
      <Section
        title="Urgences dentaires"
        subtitle="Disponibles 7j/7"
        description="En cas d'urgence, nous sommes là pour vous soulager rapidement. N'hésitez pas à nous appeler."
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {urgencies.map((urgency, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{urgency.title}</h3>
              <p className="text-sm text-gray-600">{urgency.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-red-800 mb-4">
            🚨 Urgence dentaire ?
          </h3>
          <p className="text-red-700 mb-6">
            Appelez-nous immédiatement au <strong>{siteConfig.contact.phone}</strong>
            <br />
            Nous vous recevons en urgence 7 jours sur 7.
          </p>
          <Button
            variant="primary"
            onClick={() => window.location.href = `tel:${siteConfig.contact.phone}`}
            className="bg-red-600 hover:bg-red-700"
          >
            Appeler maintenant
          </Button>
        </div>
      </Section>

      {/* Processus de soins */}
      <Section
        title="Notre approche de soins"
        subtitle="Méthodologie"
        description="Un protocole rigoureux pour des soins de qualité optimale dans le respect de votre confort."
        titleCenter
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Consultation
            </h3>
            <p className="text-gray-600">
              Examen complet et écoute de vos préoccupations
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Diagnostic
            </h3>
            <p className="text-gray-600">
              Bilan précis avec imagerie numérique
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Plan de traitement
            </h3>
            <p className="text-gray-600">
              Proposition personnalisée et devis détaillé
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Réalisation
            </h3>
            <p className="text-gray-600">
              Soins de qualité avec suivi personnalisé
            </p>
          </div>
        </div>
      </Section>

      {/* Tarifs et remboursements */}
      <Section
        title="Tarifs et remboursements"
        subtitle="Transparence"
        description="Des tarifs transparents et des facilités de paiement pour rendre nos soins accessibles."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              💰 Nos engagements tarifaires
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Devis détaillé</h4>
                  <p className="text-gray-600">Établi avant tout traitement, sans surprise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Paiement facilité</h4>
                  <p className="text-gray-600">Possibilité d&apos;étalement sur plusieurs mois</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Conventionné Secteur 1</h4>
                  <p className="text-gray-600">Remboursement maximal par la Sécurité Sociale</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              📋 Moyens de paiement acceptés
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Espèces</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Carte bancaire</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Chèque</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Virement</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Tiers payant :</strong> Disponible pour les bénéficiaires de la CMU-C, ACS et certaines mutuelles partenaires.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;

