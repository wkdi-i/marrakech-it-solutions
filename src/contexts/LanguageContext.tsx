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
    service5Title: 'On-Demand IT Support',
    service5Desc: 'Fast response IT support whenever you need technical assistance - available 24/7.',
    
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
    
    // Services Page Details
    servicesHeroDesc: 'Comprehensive IT solutions designed to meet your technology needs and keep your business running smoothly.',
    whatsIncluded: 'What\'s included:',
    service1Feature1: 'Hardware diagnostics and repair',
    service1Feature2: 'Software installation and updates',
    service1Feature3: 'Performance optimization',
    service1Feature4: 'Virus removal and security',
    service2Feature1: 'Network setup and configuration',
    service2Feature2: 'WiFi installation and optimization',
    service2Feature3: 'Network security implementation',
    service2Feature4: 'Troubleshooting connectivity issues',
    service3Feature1: 'CCTV system installation',
    service3Feature2: 'IP camera configuration',
    service3Feature3: 'Remote monitoring setup',
    service3Feature4: 'Security system maintenance',
    service5Feature1: 'Remote technical support',
    service5Feature2: 'On-site service visits',
    service5Feature3: 'Emergency IT assistance - 24/7',
    service5Feature4: 'Regular maintenance checks',
    customSolutionsTitle: 'Need Custom IT Solutions?',
    customSolutionsDesc: 'Every business has unique IT requirements. Contact us to discuss your specific needs and get a customized solution that fits your budget and objectives.',
    
    // Why Choose Us Page Details
    whyHeroDesc: 'Discover what sets our IT support services apart and why businesses in Marrakech trust us with their technology needs.',
    why1Desc: 'No hidden fees or surprise charges. We provide clear, upfront pricing for all our services with detailed cost breakdowns.',
    why2Desc: 'Quick response times with most issues resolved within 24-48 hours. Emergency support available for critical problems.',
    why3Desc: 'Every solution is tailored to your specific needs and budget. We don\'t believe in one-size-fits-all approaches.',
    why4Desc: 'Committed to excellence in every interaction. Our goal is to build long-term relationships based on trust and results.',
    moreReasonsTitle: 'More Reasons to Choose Us',
    securityTitle: 'Security Focused',
    securityDesc: 'Your data security is our top priority. We implement best practices to protect your information.',
    support247Title: '24/7 Support Available',
    support247Desc: 'Round-the-clock support for critical issues. We\'re here when you need us most.',
    experienceTitle: 'Proven Experience',
    experienceDesc: 'Years of experience serving businesses and individuals in the Marrakech region.',
    testimonialQuote: '"The difference is in the details - professional service, transparent communication, and genuine care for our technology needs. Highly recommended for any business in Marrakech."',
    testimonialAuthor: '- Satisfied Business Client',
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
    service5Title: 'Support Informatique à la Demande',
    service5Desc: 'Support IT rapide chaque fois que vous avez besoin d\'assistance technique - disponible 24/7.',
    
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
    
    // Services Page Details
    servicesHeroDesc: 'Solutions informatiques complètes conçues pour répondre à vos besoins technologiques et assurer le bon fonctionnement de votre entreprise.',
    whatsIncluded: 'Ce qui est inclus :',
    service1Feature1: 'Diagnostic et réparation matériel',
    service1Feature2: 'Installation et mises à jour logicielles',
    service1Feature3: 'Optimisation des performances',
    service1Feature4: 'Suppression de virus et sécurité',
    service2Feature1: 'Configuration et installation réseau',
    service2Feature2: 'Installation et optimisation WiFi',
    service2Feature3: 'Mise en place de la sécurité réseau',
    service2Feature4: 'Dépannage des problèmes de connectivité',
    service3Feature1: 'Installation de systèmes de vidéosurveillance',
    service3Feature2: 'Configuration de caméras IP',
    service3Feature3: 'Installation de surveillance à distance',
    service3Feature4: 'Maintenance des systèmes de sécurité',
    service5Feature1: 'Support technique à distance',
    service5Feature2: 'Visites de service sur site',
    service5Feature3: 'Assistance informatique d\'urgence - 24/7',
    service5Feature4: 'Vérifications de maintenance régulières',
    customSolutionsTitle: 'Besoin de Solutions IT Personnalisées?',
    customSolutionsDesc: 'Chaque entreprise a des besoins informatiques uniques. Contactez-nous pour discuter de vos besoins spécifiques et obtenir une solution personnalisée adaptée à votre budget et vos objectifs.',
    
    // Why Choose Us Page Details
    whyHeroDesc: 'Découvrez ce qui distingue nos services de support informatique et pourquoi les entreprises de Marrakech nous font confiance pour leurs besoins technologiques.',
    why1Desc: 'Aucun frais caché ni surprise. Nous proposons des tarifs clairs et transparents pour tous nos services avec des détails complets des coûts.',
    why2Desc: 'Délais d\'intervention rapides avec la plupart des problèmes résolus sous 24 à 48 heures. Support d\'urgence disponible pour les problèmes critiques.',
    why3Desc: 'Chaque solution est adaptée à vos besoins spécifiques et à votre budget. Nous ne croyons pas aux approches universelles.',
    why4Desc: 'Engagement envers l\'excellence dans chaque interaction. Notre objectif est de construire des relations durables basées sur la confiance et les résultats.',
    moreReasonsTitle: 'Autres Raisons de Nous Choisir',
    securityTitle: 'Axé sur la Sécurité',
    securityDesc: 'La sécurité de vos données est notre priorité absolue. Nous mettons en œuvre les meilleures pratiques pour protéger vos informations.',
    support247Title: 'Support 24/7 Disponible',
    support247Desc: 'Support permanent pour les problèmes critiques. Nous sommes là quand vous avez le plus besoin de nous.',
    experienceTitle: 'Expérience Confirmée',
    experienceDesc: 'Des années d\'expérience au service des entreprises et particuliers de la région de Marrakech.',
    testimonialQuote: '"La différence est dans les détails - service professionnel, communication transparente et véritable attention à nos besoins technologiques. Hautement recommandé pour toute entreprise à Marrakech."',
    testimonialAuthor: '- Client Entreprise Satisfait',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

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