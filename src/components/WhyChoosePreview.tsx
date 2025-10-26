import { CheckCircle, Clock, DollarSign, Settings, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const WhyChoosePreview = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      titleKey: 'why1',
      color: 'text-accent-success',
    },
    {
      icon: Clock,
      titleKey: 'why2',
      color: 'text-secondary-blue',
    },
    {
      icon: Settings,
      titleKey: 'why3',
      color: 'text-accent-blue',
    },
    {
      icon: Users,
      titleKey: 'why4',
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Neon glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-secondary to-accent-pink"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl bg-gradient-to-r from-secondary via-accent-purple to-accent-pink bg-clip-text text-transparent mb-4">
            {t('whyTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent-purple mx-auto rounded-full shadow-purple"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-card/50 backdrop-blur-xl border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan group-hover:border-primary/50 transition-all duration-300`}>
                  <Icon className={`w-8 h-8 ${benefit.color} drop-shadow-[0_0_10px_currentColor]`} />
                </div>
                <h3 className="font-inter font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  <CheckCircle className="w-5 h-5 inline mr-2 text-accent-success drop-shadow-[0_0_10px_currentColor]" />
                  {t(benefit.titleKey)}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            {t('whyChooseCommitment')}
          </p>
        </div>
      </div>
    </section>
  );
};