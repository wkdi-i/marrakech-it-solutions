import { Link } from 'react-router-dom';
import { Camera, Network, Phone, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
    },
    {
      icon: Network,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
    },
    {
      icon: Phone,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
    },
    {
      icon: Headphones,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient relative overflow-hidden">
      {/* Neon glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-primary to-accent-blue"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-secondary to-accent-purple"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary via-accent-blue to-primary bg-clip-text text-transparent mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto rounded-full shadow-cyan"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card-service group">
                <div className="tech-icon mb-4 group-hover:scale-110 group-hover:shadow-cyan">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="btn-hero font-inter font-semibold group">
              {t('viewAllServices')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};