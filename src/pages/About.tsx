import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: CheckCircle, value: '24/7', label: 'Support Available' },
    { icon: Clock, value: '<2h', label: 'Response Time' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-primary mb-6">
              {t('aboutTitle')}
            </h1>
            <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image Placeholder */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary to-secondary-blue rounded-2xl flex items-center justify-center mb-6 shadow-strong">
                  <div className="w-48 h-48 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-primary-foreground" />
                  </div>
                </div>
                <p className="font-inter text-sm text-muted-foreground italic">
                  Space reserved for profile photo or company logo
                </p>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="font-inter font-bold text-3xl text-primary mb-4">
                  Professional IT Support Expert
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  With years of experience in the IT industry, I specialize in providing comprehensive 
                  technical solutions for businesses and individuals in Marrakech. My approach combines 
                  technical expertise with excellent customer service.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Whether you need computer repair, network setup, security camera installation, 
                  or ongoing IT support, I'm committed to delivering reliable solutions that keep 
                  your technology running smoothly.
                </p>

                {/* Certifications/Skills */}
                <div className="space-y-3">
                  <h3 className="font-inter font-semibold text-xl text-primary">Expertise Areas:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      Hardware Diagnostics & Repair
                    </li>
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      Network Configuration & Security
                    </li>
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      Cloud Solutions & Data Backup
                    </li>
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      Security System Installation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-secondary-blue mx-auto mb-4" />
                  <div className="font-inter font-bold text-3xl text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-inter text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;