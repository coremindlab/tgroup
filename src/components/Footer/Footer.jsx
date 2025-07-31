import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.scss';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>T-GROUP</h2>
          <p>Bangkok's nightlife collective</p>
        </div>

        <div className="footer__nav">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/venue">{t('nav.venue')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>

        <div className="footer__contact">
          <p>📍 Bangkok, Thailand</p>
          <p>📞 02-xxx-xxxx</p>
          <p>✉️ info@tgroup.com</p>
          <div className="footer__socials">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">LINE</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} T-Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
