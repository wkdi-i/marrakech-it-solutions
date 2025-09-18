import { Link } from 'react-router-dom';
import { Computer, Network, Camera, Cloud, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Computer,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
    },
    {
      icon: Network,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
    },
    {
      icon: Camera,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
    },
    {
      icon: Cloud,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
    },
    {
      icon: Headphones,
      titleKey: 'service5Title',
      descKey: 'service5Desc',
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-primary mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-secondary-blue mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card-service group">
                <div className="tech-icon mb-4 group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-inter font-semibold text-lg text-primary mb-3">
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
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};