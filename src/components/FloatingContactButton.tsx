import { useState } from 'react';
import { MessageCircle, Phone, Mail, Instagram, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+212 6 12 34 56 78',
      href: 'tel:+212612345678',
      color: 'text-accent-blue',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+212 6 12 34 56 78',
      href: 'https://wa.me/212612345678',
      color: 'text-accent-success',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@sahatech.ma',
      href: 'mailto:contact@sahatech.ma',
      color: 'text-accent-purple',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@sahatech1',
      href: 'https://instagram.com/sahatech1',
      color: 'text-accent-pink',
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-accent-blue to-secondary-blue shadow-strong hover:shadow-blue transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contactez-nous"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Contact Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md animate-scale-in">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="space-y-6 pt-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Contactez-nous
              </h2>
              <p className="text-sm text-muted-foreground">
                Nous sommes là pour vous aider
              </p>
            </div>

            {/* Contact Info List */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.label === 'Instagram' ? '_blank' : undefined}
                  rel={contact.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200 group"
                >
                  <div className={`${contact.color} p-2 rounded-full bg-background`}>
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground truncate group-hover:text-accent-blue transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Disponibilité 7/7 pour vos besoins informatiques
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
