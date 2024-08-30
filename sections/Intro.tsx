import React from 'react';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';
import BgTitle from '@components/BgTitle';

const Intro = () => {
  function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    // change your title and section id
    <SectionCard id='intro' title='ABOUT' page='01'>
      <>
        {<img src='about.png' width='210em' height='210em' />}
        <BgTitle title='ABOUT' />
        <div>
          <p>
            {/* add your text here */}
            <span
              className={styles.myName}
              style={{ fontFamily: 'poppins' }}
            >
              MERCHANTSONS
            </span>
            {/* <br /> */}
            As a versatile <b>Full Stack Programmer</b>, <b>I</b> specialize in crafting seamless web experiences using <b>Next.js</b>,
            <b>Tailwind CSS</b>, and <b>TypeScript</b>. My expertise spans both <b>frontend and backend development</b>,  mobile app 
            creation, and <b>UI/UX design</b>, ensuring comprehensive and user-friendly solutions.             
          </p>
          Did I just pique your interest? Let&apos;s{' '}
          <a onClick={scrollToContact}>
            <b style={{ textDecoration: 'underline' }}>chat </b>💬
          </a>{' '}
        </div>
      </>
    </SectionCard>
  );
};

export default Intro;
