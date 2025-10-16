import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '212600808474';
    const message = encodeURIComponent(`Hello! I'm interested in your IT support services.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-primary mb-6">
              {t('contactTitle')}
            </h1>
            <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              {t('contactSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="card-professional p-8">
                <h2 className="font-inter font-bold text-2xl text-primary mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-inter font-medium text-primary mb-2">
                      {t('name')} *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="font-inter"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-primary mb-2">
                      {t('email')} *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="font-inter"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-primary mb-2">
                      {t('phone')}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="font-inter"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-primary mb-2">
                      {t('message')} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="font-inter resize-none"
                      placeholder="Describe your IT support needs or questions..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-hero font-inter font-semibold group"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('send')}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="card-professional p-8">
                  <h2 className="font-inter font-bold text-2xl text-primary mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-inter font-semibold text-primary">Phone</h3>
                        <p className="font-inter text-muted-foreground">+212600808474</p>
                        <p className="font-inter text-sm text-muted-foreground">Available 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-inter font-semibold text-primary">Email</h3>
                        <p className="font-inter text-muted-foreground">contact@itsupport-marrakech.com</p>
                        <p className="font-inter text-sm text-muted-foreground">We reply within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-inter font-semibold text-primary">Location</h3>
                        <p className="font-inter text-muted-foreground">Marrakech, Morocco</p>
                        <p className="font-inter text-sm text-muted-foreground">On-site services available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="card-professional p-8 bg-gradient-to-br from-accent-success/5 to-accent-success/10 border-accent-success/20">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 text-accent-success mx-auto mb-4" />
                    <h3 className="font-inter font-bold text-xl text-primary mb-2">
                      Quick WhatsApp Support
                    </h3>
                    <p className="font-inter text-muted-foreground mb-6">
                      Get instant support via WhatsApp. Perfect for urgent technical issues.
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      size="lg" 
                      className="w-full bg-accent-success hover:bg-accent-success/90 text-white font-inter font-semibold"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t('whatsapp')}
                    </Button>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="card-professional p-8">
                  <h3 className="font-inter font-bold text-xl text-primary mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 font-inter text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Availability</span>
                      <span className="text-primary font-semibold">24/7</span>
                    </div>
                    <p className="text-sm">We're available around the clock to support your IT needs, including emergency services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;