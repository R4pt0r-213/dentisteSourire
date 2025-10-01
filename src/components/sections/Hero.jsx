import Container from '../common/Container';
import Button from '../common/Button';

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  backgroundImage,
  children 
}) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <Container className="relative">
        <div className="py-24 lg:py-32">
          <div className="max-w-4xl">
            {subtitle && (
              <p className="text-primary-200 text-lg font-medium mb-4">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            
            {description && (
              <p className="text-xl text-primary-100 mb-8 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
            
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCTA && (
                  <Button 
                    variant="secondary"
                    size="lg"
                    {...primaryCTA}
                  >
                    {primaryCTA.text}
                  </Button>
                )}
                
                {secondaryCTA && (
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                    {...secondaryCTA}
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            )}
            
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;