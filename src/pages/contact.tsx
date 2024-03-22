import React from 'react';
import { Banner, BannerText } from './homepage';
import ContactForm from '../components/contactForm';



function Contact() {
  return (
    <main>
      <Banner title="Banner">
        <BannerText>We're here to help!</BannerText>
      </Banner>
      <ContactForm/>
    </main>
  );
}

export default Contact;