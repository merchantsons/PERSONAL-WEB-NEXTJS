import React from 'react';
import styles from '@styles/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span> Code &amp; design by <strong>Merchantsons</strong></span>
      <span> © 2024 - Merchantsons — <b> @merchantsons</b><a href='#'></a>{' '}  👈 </span>
    </footer>
  );
};

export default Footer;
