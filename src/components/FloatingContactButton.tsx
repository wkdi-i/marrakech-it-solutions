import { useState } from 'react';
import { MessageCircle, Phone, Mail, Instagram } from 'lucide-react';

export const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactButtons = [
    {
      icon: Phone,
      label: 'Téléphone',
      href: 'tel:+212600808474',
      bgColor: 'bg-accent-blue',
      hoverColor: 'hover:bg-accent-blue/90',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/212600808474',
      bgColor: 'bg-accent-success',
      hoverColor: 'hover:bg-accent-success/90',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@sahatech.ma',
      bgColor: 'bg-accent-purple',
      hoverColor: 'hover:bg-accent-purple/90',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/sahatech1',
      bgColor: 'bg-accent-pink',
      hoverColor: 'hover:bg-accent-pink/90',
      target: '_blank',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Expanded Action Buttons */}
      {isExpanded && (
        <>
          {contactButtons.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.target}
              rel={contact.target ? 'noopener noreferrer' : undefined}
              className={`h-12 w-12 rounded-full ${contact.bgColor} ${contact.hoverColor} shadow-strong transition-all duration-300 hover:scale-110 hover:shadow-elegant flex items-center justify-center group animate-scale-in`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              aria-label={contact.label}
            >
              <contact.icon className="h-5 w-5 text-white" />
            </a>
          ))}
        </>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`h-14 w-14 rounded-full bg-gradient-to-br from-accent-blue to-secondary-blue shadow-strong hover:shadow-blue transition-all duration-300 hover:scale-110 flex items-center justify-center group ${
          isExpanded ? 'rotate-45' : ''
        }`}
        aria-label="Contactez-nous"
        aria-expanded={isExpanded}
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
};
