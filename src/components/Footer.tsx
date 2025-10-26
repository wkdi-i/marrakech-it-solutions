import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/50 backdrop-blur-xl border-t border-primary/20 relative overflow-hidden">
      {/* Neon glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-primary to-accent-blue"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-secondary to-accent-purple"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={new URL('../assets/saha-logo.jpg', import.meta.url).href} 
              alt="SAHA" 
              className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            />
            <p className="font-inter text-muted-foreground leading-relaxed">
              {t('footerText')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-lg text-foreground">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-primary group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-all" />
                <span className="font-inter text-muted-foreground group-hover:text-primary transition-colors">+212600808474</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-accent-blue group-hover:drop-shadow-[0_0_10px_rgba(59,184,255,0.6)] transition-all" />
                <span className="font-inter text-muted-foreground group-hover:text-primary transition-colors">contact@sahatech.ma</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-secondary group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] transition-all" />
                <span className="font-inter text-muted-foreground group-hover:text-primary transition-colors">Marrakech, Morocco</span>
              </div>
            </div>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-lg text-foreground">{t('services')}</h3>
            <ul className="space-y-2 font-inter text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-default">• {t('service1Title')}</li>
              <li className="hover:text-primary transition-colors cursor-default">• {t('service2Title')}</li>
              <li className="hover:text-primary transition-colors cursor-default">• {t('service3Title')}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};