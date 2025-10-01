import Container from '../common/Container';

const Section = ({ 
  id,
  title, 
  subtitle, 
  description, 
  children, 
  className = '',
  containerSize = 'default',
  titleCenter = false,
  background = 'white'
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  };

  return (
    <section id={id} className={`py-16 lg:py-24 ${bgClasses[background]} ${className}`}>
      <Container size={containerSize}>
        {(title || subtitle || description) && (
          <div className={`mb-12 lg:mb-16 ${titleCenter ? 'text-center' : ''}`}>
            {subtitle && (
              <p className="text-primary-600 font-semibold text-lg mb-2">
                {subtitle}
              </p>
            )}
            
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            
            {description && (
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </Container>
    </section>
  );
};

export default Section;