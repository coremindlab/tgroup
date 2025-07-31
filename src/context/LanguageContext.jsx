import React, { createContext, useContext, useState } from 'react';
import en from '../translations/en.js';
import th from '../translations/th.js';

const translations = { en, th };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => (obj ? obj[k] : null), translations[language]);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
