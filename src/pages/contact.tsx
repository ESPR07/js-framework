import React, { useEffect } from 'react';
import { Banner, BannerText } from './homepage';
import ContactForm from '../components/ContactForm';
import {Helmet} from "react-helmet-async";



function Contact() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet='UTF-8'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name='description' content="Come in contact with us!"></meta>
        <title>Contact Us</title>
      </Helmet>
      <main>
        <Banner title="Banner">
          <BannerText>We're here to help!</BannerText>
        </Banner>
        <ContactForm/>
      </main>
    </React.Fragment>
  );
}

export default Contact;