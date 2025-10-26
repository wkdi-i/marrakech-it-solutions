import { ArrowRight, CheckCircle, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Neon glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-[pulse_8s_ease-in-out_infinite] bg-gradient-to-br from-primary to-accent-blue"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-[pulse_10s_ease-in-out_infinite_2s] bg-gradient-to-br from-secondary to-accent-purple"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl animate-[pulse_12s_ease-in-out_infinite_4s] bg-gradient-to-br from-accent-pink to-primary"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,211,238,0.1)_1px,_transparent_0)] bg-[size:40px_40px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-xl border border-primary/30 shadow-cyan">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-cyan"></div>
            <span className="text-sm font-inter font-medium text-foreground">
              {t('techSupportExperts')}
            </span>
          </div>

          {/* Main Heading with Neon Glow */}
          <h1 className="font-inter font-extrabold text-5xl md:text-7xl leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent-blue to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              {t('heroTitle1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary via-accent-purple to-accent-pink bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              {t('heroTitle2')}
            </span>
            <br />
            <span className="text-foreground drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {t('heroTitle3')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="btn-hero font-inter font-semibold text-lg px-8 py-6 group relative overflow-hidden"
              onClick={() => navigate('/services')}
            >
              <span className="relative z-10">{t('exploreServices')}</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-semibold text-lg px-8 py-6 group"
              onClick={() => navigate('/contact')}
            >
              {t('getInTouch')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators with Neon Style */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{t('available247')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent-purple/20">
              <Star className="w-4 h-4 text-accent-purple fill-accent-purple" />
              <span>{t('satisfiedClients')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent-blue/20">
              <Phone className="w-4 h-4 text-accent-blue" />
              <span>+212600808474</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};