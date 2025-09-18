import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    whyChooseUs: 'Why Choose Us',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Reliable IT Support & Maintenance for Businesses and Individuals in Marrakech',
    heroSubtitle: 'Professional IT solutions to keep your technology running smoothly while you focus on what matters most.',
    requestSupport: 'Request Support',
    
    // About
    aboutTitle: 'About Our IT Support',
    aboutDescription: 'I provide dedicated IT support for businesses and individuals. My mission is to keep your systems running smoothly so you can focus on what matters most.',
    
    // Services
    servicesTitle: 'Our IT Services',
    service1Title: 'Computer Maintenance & Repair',
    service1Desc: 'Complete maintenance and repair services for all types of computers and hardware.',
    service2Title: 'Network Installation & Troubleshooting',
    service2Desc: 'Professional network setup, configuration, and troubleshooting services.',
    service3Title: 'Security Camera Setup',
    service3Desc: 'Complete security camera installation and monitoring system setup.',
    service4Title: 'Cloud & Backup Solutions',
    service4Desc: 'Secure cloud storage and automated backup solutions for your data.',
    service5Title: 'On-Demand IT Support',
    service5Desc: 'Fast response IT support whenever you need technical assistance.',
    
    // Why Choose Us
    whyTitle: 'Why Choose Our IT Services?',
    why1: 'Affordable & transparent pricing',
    why2: 'Fast response times',
    why3: 'Customized solutions',
    why4: 'Professional & reliable service',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Ready to solve your IT challenges? Contact us today for professional support.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send Message',
    whatsapp: 'WhatsApp',
    
    // Footer
    footerText: 'Professional IT Support Services in Marrakech',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    whyChooseUs: 'Pourquoi nous choisir',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Support et Maintenance Informatique Fiables pour Entreprises et Particuliers à Marrakech',
    heroSubtitle: 'Solutions informatiques professionnelles pour maintenir votre technologie en marche pendant que vous vous concentrez sur l\'essentiel.',
    requestSupport: 'Demander un service',
    
    // About
    aboutTitle: 'À propos de notre support IT',
    aboutDescription: 'Je fournis un support informatique dédié aux entreprises et aux particuliers. Ma mission est d\'assurer le bon fonctionnement de vos systèmes pour que vous puissiez vous concentrer sur l\'essentiel.',
    
    // Services
    servicesTitle: 'Nos Services Informatiques',
    service1Title: 'Maintenance et Réparation Informatique',
    service1Desc: 'Services complets de maintenance et réparation pour tous types d\'ordinateurs et matériel.',
    service2Title: 'Installation et Dépannage Réseau',
    service2Desc: 'Services professionnels d\'installation, configuration et dépannage réseau.',
    service3Title: 'Installation de Caméras de Sécurité',
    service3Desc: 'Installation complète de caméras de sécurité et systèmes de surveillance.',
    service4Title: 'Solutions Cloud et Sauvegarde',
    service4Desc: 'Stockage cloud sécurisé et solutions de sauvegarde automatisées pour vos données.',
    service5Title: 'Support Informatique à la Demande',
    service5Desc: 'Support IT rapide chaque fois que vous avez besoin d\'assistance technique.',
    
    // Why Choose Us
    whyTitle: 'Pourquoi choisir nos services IT?',
    why1: 'Tarifs abordables et transparents',
    why2: 'Intervention rapide',
    why3: 'Solutions personnalisées',
    why4: 'Service professionnel et fiable',
    
    // Contact
    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Prêt à résoudre vos défis IT? Contactez-nous aujourd\'hui pour un support professionnel.',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    message: 'Message',
    send: 'Envoyer le message',
    whatsapp: 'WhatsApp',
    
    // Footer
    footerText: 'Services de Support Informatique Professionnel à Marrakech',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};