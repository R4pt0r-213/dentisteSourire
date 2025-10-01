import Hero from '../components/sections/Hero';
import Section from '../components/sections/Section';
import { siteConfig } from '../config/site.config';

const About = () => {
  const team = [
    {
      name: 'Dr. Jean Martin',
      role: 'Chirurgien-dentiste',
      speciality: 'Implantologie et chirurgie orale',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      description: 'Diplômé de la Faculté de médecine de Lille, le Dr. Martin se spécialise dans l\'implantologie depuis plus de 10 ans.'
    },
    {
      name: 'Dr. Sophie Dubois',
      role: 'Chirurgien-dentiste',
      speciality: 'Orthodontie et pédodontie',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      description: 'Experte en orthodontie, le Dr. Dubois accompagne patients enfants et adultes vers le sourire parfait.'
    },
    {
      name: 'Marie Lefebvre',
      role: 'Assistante dentaire',
      speciality: 'Accueil et soins',
      image: 'https://images.unsplash.com/photo-1594824475050-5b9800e34a34?w=300&h=300&fit=crop&crop=face',
      description: 'Diplômée et expérimentée, Marie assure l\'accueil et l\'accompagnement des patients avec bienveillance.'
    }
  ];

  const values = [
    {
      title: 'Excellence médicale',
      description: 'Formation continue et utilisation des dernières technologies pour des soins de qualité optimale.',
      icon: '🎯'
    },
    {
      title: 'Écoute et empathie',
      description: 'Chaque patient est unique. Nous prenons le temps de comprendre vos besoins et vos appréhensions.',
      icon: '👂'
    },
    {
      title: 'Transparence',
      description: 'Information claire sur les traitements, les coûts et les délais pour une relation de confiance.',
      icon: '💎'
    },
    {
      title: 'Innovation',
      description: 'Investissement constant dans les nouvelles technologies pour votre confort et des résultats optimaux.',
      icon: '🚀'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="À propos de nous"
        subtitle="Notre cabinet"
        description="Découvrez notre équipe passionnée et notre engagement pour votre santé dentaire depuis plus de 15 ans à Lens."
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop"
      />

      {/* Histoire du cabinet */}
      <Section
        title="Notre histoire"
        subtitle="Depuis 2008"
        description="Un cabinet familial au cœur de Lens, dédié à votre bien-être dentaire."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Fondé en 2008 par le Dr. Jean Martin, le Cabinet Dentaire Sourire s&apos;est rapidement imposé comme une référence dans les soins dentaires à Lens et ses environs.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre approche combine expertise technique et dimension humaine. Nous croyons que chaque sourire mérite une attention particulière et des soins personnalisés.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Au fil des années, nous avons étendu notre équipe et nos services pour répondre aux besoins croissants de nos patients, tout en conservant cette proximité qui fait notre force.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Années d&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3000+</div>
                <div className="text-sm text-gray-600">Patients traités</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop"
              alt="Intérieur du cabinet dentaire"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute -top-6 -right-6 bg-primary-600 text-white p-4 rounded-xl">
              <div className="text-2xl font-bold">2008</div>
              <div className="text-sm">Création</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Notre équipe */}
      <Section
        title="Notre équipe"
        subtitle="Des professionnels à votre service"
        description="Une équipe expérimentée et passionnée, formée aux dernières techniques dentaires."
        titleCenter
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Spécialité : {member.speciality}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Nos valeurs */}
      <Section
        title="Nos valeurs"
        subtitle="Ce qui nous guide"
        description="Des principes forts qui orientent notre pratique au quotidien pour votre satisfaction."
        titleCenter
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">{value.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cabinet et équipements */}
      <Section
        title="Notre cabinet"
        subtitle="Équipements modernes"
        description="Un environnement pensé pour votre confort avec des technologies de pointe."
        background="primary"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Radiologie numérique</h4>
                  <p className="text-gray-600">Diagnostics précis avec 90% moins de radiations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Laser thérapeutique</h4>
                  <p className="text-gray-600">Soins sans douleur et cicatrisation rapide</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Stérilisation moderne</h4>
                  <p className="text-gray-600">Protocoles stricts pour votre sécurité</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fauteuils ergonomiques</h4>
                  <p className="text-gray-600">Confort optimal durant vos soins</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=200&fit=crop"
              alt="Salle de soins moderne"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop"
              alt="Équipement dentaire"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop"
              alt="Salle d'attente"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=200&fit=crop"
              alt="Accueil du cabinet"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Certifications et formations */}
      <Section
        title="Certifications et formations"
        subtitle="Excellence reconnue"
        description="Notre engagement pour la qualité se traduit par une formation continue et des certifications officielles."
        titleCenter
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ordre des Chirurgiens-Dentistes
            </h3>
            <p className="text-gray-600">
              Inscription à l&apos;Ordre national des chirurgiens-dentistes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Formation Continue
            </h3>
            <p className="text-gray-600">
              Plus de 40h de formation par an pour rester à la pointe
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Normes RGPD
            </h3>
            <p className="text-gray-600">
              Respect strict de la confidentialité de vos données
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;