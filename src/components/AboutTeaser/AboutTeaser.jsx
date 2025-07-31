import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './AboutTeaser.scss';

const AboutTeaser = () => {
  const { t } = useLanguage();

  return (
    <section className="about-teaser section">
      {/* <h2>{t('home.aboutTitle') || 'About T-Group'}</h2> */}
      {/* <p className="main-about">
        <span>{t('home.teaserLine1') || 'We’re not a bar.'}</span><br />
        <span>{t('home.teaserLine2') || 'We’re not a club.'}</span><br />
        <span>{t('home.teaserLine3') || 'We’re not a brand.'}</span><br />
      </p> */}
      <p className="main-about">
        {t('home.aboutDesc') || 'We’re a collection of places built for people who love the night.'}
      </p>
    </section>
  );
};

export default AboutTeaser;
