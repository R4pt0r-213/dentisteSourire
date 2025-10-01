import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import Container from './Container';

const Footer = () => {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Informations du cabinet */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{siteConfig.name}</h3>
              <div className="space-y-2 text-gray-300">
                <p>{siteConfig.contact.address.street}</p>
                <p>{siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</p>
                <p className="pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    📞 {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    ✉️ {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires d&apos;ouverture</h3>
              <div className="space-y-1 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi :</span>
                  <span>{siteConfig.hours.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi :</span>
                  <span>{siteConfig.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche :</span>
                  <span>{siteConfig.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 {siteConfig.name}. Tous droits réservés.</p>
          <p className="mt-1">Réalisé avec React et Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;