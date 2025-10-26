import { useState } from 'react';
import { MessageCircle, Phone, Mail, Instagram } from 'lucide-react';

export const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactButtons = [
    {
      icon: Phone,
      label: 'Téléphone',
      href: 'tel:+212600808474',
      bgColor: 'bg-gradient-to-br from-accent-blue to-primary',
      shadowColor: 'shadow-cyan hover:shadow-blue',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/212600808474',
      bgColor: 'bg-gradient-to-br from-accent-success to-primary',
      shadowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@sahatech.ma',
      bgColor: 'bg-gradient-to-br from-accent-purple to-secondary',
      shadowColor: 'shadow-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/sahatech1',
      bgColor: 'bg-gradient-to-br from-accent-pink to-accent-purple',
      shadowColor: 'shadow-pink hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]',
      target: '_blank',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Expanded Action Buttons with Neon Glow */}
      {isExpanded && (
        <>
          {contactButtons.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.target}
              rel={contact.target ? 'noopener noreferrer' : undefined}
              className={`h-12 w-12 rounded-full ${contact.bgColor} ${contact.shadowColor} transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-scale-in relative`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              aria-label={contact.label}
            >
              <div className={`absolute inset-0 rounded-full ${contact.bgColor} opacity-50 blur-md animate-pulse`}></div>
              <contact.icon className="h-5 w-5 text-background relative z-10" />
            </a>
          ))}
        </>
      )}

      {/* Main Toggle Button with Neon Glow */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent-blue shadow-cyan hover:shadow-blue transition-all duration-300 hover:scale-110 flex items-center justify-center group relative ${
          isExpanded ? 'rotate-45' : ''
        }`}
        aria-label="Contactez-nous"
        aria-expanded={isExpanded}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent-blue opacity-50 blur-lg animate-pulse"></div>
        <MessageCircle className="h-6 w-6 text-background group-hover:rotate-12 transition-transform duration-300 relative z-10" />
      </button>
    </div>
  );
};
