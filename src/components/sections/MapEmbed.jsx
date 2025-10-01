const MapEmbed = ({ 
  address, 
  className = '',
  height = '400px',
  zoom = 15
}) => {
  // Créer l'URL Google Maps avec les paramètres appropriés
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Carte de ${address}`}
        className="w-full"
      />
    </div>
  );
};

export default MapEmbed;