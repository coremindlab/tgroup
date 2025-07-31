import React from 'react';
import { Container, Typography } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.scss';
import gotHero from '../../assets/got/got_10.jpg'; // ✅ import the image

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${gotHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container className="hero__content">
        <Typography variant="h2" className="hero__title">
          {t('hero.title')}
        </Typography>
        <Typography variant="h6" className="hero__subtitle">
          {t('hero.subtitle')}
        </Typography>
      </Container>
    </div>
  );
};

export default Hero;
