import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-switcher">
      <button onClick={() => setLanguage('en')} disabled={language === 'en'}>EN</button>
      <button onClick={() => setLanguage('th')} disabled={language === 'th'}>TH</button>
    </div>
  );
};

export default LanguageSwitcher;
