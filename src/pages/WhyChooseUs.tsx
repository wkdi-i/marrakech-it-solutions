import { CheckCircle, DollarSign, Clock, Settings, Users, Shield, Headphones, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      titleKey: 'why1',
      description: 'No hidden fees or surprise charges. We provide clear, upfront pricing for all our services with detailed cost breakdowns.',
      color: 'text-accent-success',
    },
    {
      icon: Clock,
      titleKey: 'why2',
      description: 'Quick response times with most issues resolved within 24-48 hours. Emergency support available for critical problems.',
      color: 'text-secondary-blue',
    },
    {
      icon: Settings,
      titleKey: 'why3',
      description: 'Every solution is tailored to your specific needs and budget. We don\'t believe in one-size-fits-all approaches.',
      color: 'text-accent-blue',
    },
    {
      icon: Users,
      titleKey: 'why4',
      description: 'Committed to excellence in every interaction. Our goal is to build long-term relationships based on trust and results.',
      color: 'text-primary',
    },
  ];

  const additionalBenefits = [
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Your data security is our top priority. We implement best practices to protect your information.',
    },
    {
      icon: Headphones,
      title: '24/7 Support Available',
      description: 'Round-the-clock support for critical issues. We\'re here when you need us most.',
    },
    {
      icon: Award,
      title: 'Proven Experience',
      description: 'Years of experience serving businesses and individuals in the Marrakech region.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-primary mb-6">
              {t('whyTitle')}
            </h1>
            <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              Discover what sets our IT support services apart and why businesses in Marrakech trust us with their technology needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`w-16 h-16 flex-shrink-0 rounded-2xl bg-secondary flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-xl text-primary mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-2" />
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-primary mb-4">
              More Reasons to Choose Us
            </h2>
            <div className="w-16 h-1 bg-secondary-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card-professional p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-inter font-semibold text-lg text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-blue flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <blockquote className="font-inter text-xl text-primary-foreground leading-relaxed italic">
                "The difference is in the details - professional service, transparent communication, 
                and genuine care for our technology needs. Highly recommended for any business in Marrakech."
              </blockquote>
              <cite className="font-inter text-primary-foreground/80 mt-4 block">
                - Satisfied Business Client
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;