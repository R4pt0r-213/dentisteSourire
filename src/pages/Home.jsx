import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Section from '../components/sections/Section';
import ServiceCard from '../components/sections/ServiceCard';
import Testimonial from '../components/sections/Testimonial';
import Button from '../components/common/Button';
import { siteConfig } from '../config/site.config';

const Home = () => {
  const services = [
    {
      title: 'Soins conservateurs',
      description: 'Caries, détartrage, soins des gencives et prévention pour préserver vos dents naturelles.',
      icon: '🦷',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop',
      features: [
        'Traitement des caries',
        'Détartrage et polissage',
        'Soins des gencives'
      ]
    },
    {
      title: 'Implants dentaires',
      description: 'Solutions durables pour remplacer vos dents manquantes avec un confort optimal.',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop',
      features: [
        'Implants unitaires',
        'Bridges sur implants',
        'Prothèses complètes'
      ]
    },
    {
      title: 'Orthodontie',
      description: 'Alignement dentaire pour enfants et adultes avec des techniques modernes.',
      icon: '😊',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop',
      features: [
        'Appareils traditionnels',
        'Gouttières invisibles',
        'Orthodontie linguale'
      ]
    }
  ];

  const testimonials = [
    {
      content: 'Une équipe exceptionnelle ! Dr. Martin a su me rassurer lors de ma pose d\'implant. Le résultat est parfait et le suivi impeccable.',
      author: 'Marie Dubois',
      role: 'Patiente depuis 3 ans',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d10db9?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      content: 'Cabinet moderne et très propre. L\'équipe est à l\'écoute et les soins sont réalisés avec beaucoup de douceur. Je recommande vivement !',
      author: 'Pierre Leblanc',
      role: 'Patient depuis 2 ans',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      content: 'Enfin un dentiste qui prend le temps d\'expliquer ! Ma fille n\'a plus peur du dentiste grâce à leur approche bienveillante.',
      author: 'Sophie Martin',
      role: 'Maman de Léa, 8 ans',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Votre sourire, notre passion"
        subtitle="Cabinet Dentaire Sourire - Lens"
        description="Des soins dentaires de qualité dans un environnement moderne et rassurant. Notre équipe vous accompagne pour préserver et embellir votre sourire."
        primaryCTA={{
          text: 'Prendre rendez-vous',
          onClick: () => window.location.href = `tel:${siteConfig.contact.phone}`
        }}
        secondaryCTA={{
          text: 'Découvrir nos services',
          onClick: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
        }}
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop"
      />

      {/* Services Section */}
      <Section
        id="services"
        title="Nos services"
        subtitle="Excellence dentaire"
        description="Nous proposons une gamme complète de soins dentaires pour toute la famille, avec des équipements de pointe et des techniques modernes."
        titleCenter
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="primary" size="lg">
              Voir tous nos services
            </Button>
          </Link>
        </div>
      </Section>

      {/* About Section */}
      <Section
        title="Pourquoi nous choisir ?"
        subtitle="Notre engagement"
        description="Une approche personnalisée, des technologies de pointe et une équipe passionnée pour votre bien-être dentaire."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise reconnue</h3>
                  <p className="text-gray-600">Plus de 15 ans d&apos;expérience dans tous les domaines de la dentisterie moderne.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Équipements modernes</h3>
                  <p className="text-gray-600">Technologies de pointe pour des diagnostics précis et des soins confortables.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💙</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Approche bienveillante</h3>
                  <p className="text-gray-600">Une écoute attentive et des soins adaptés à chaque patient, dans le respect et la douceur.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop"
              alt="Cabinet dentaire moderne"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600">1000+</div>
              <div className="text-sm text-gray-600">Patients satisfaits</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        title="Témoignages patients"
        subtitle="Ils nous font confiance"
        description="Découvrez l'expérience de nos patients et leur satisfaction après leurs soins."
        titleCenter
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prêt à prendre soin de votre sourire ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd&apos;hui et découvrez nos soins personnalisés dans un environnement moderne et rassurant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = `tel:${siteConfig.contact.phone}`}
            >
              📞 {siteConfig.contact.phone}
            </Button>
            
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Formulaire de contact
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;