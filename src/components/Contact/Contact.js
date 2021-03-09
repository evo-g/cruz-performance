import React from 'react';
import { motion } from 'framer-motion';
import { StyledContact } from './Contact.styled';

export default function Contact() {
  return (
    <StyledContact>
      <motion.div 
        className='content'
        animate={{ scale: .95 }}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        <h2>For pricing and more information</h2>
        <a href="tel:6194024165">Call at 619-402-4165</a>
        <h2>Or Text</h2>
        <a href="sms:+16194024165">Click here to text!</a>
        <h2>Or Email</h2>
        <a href="mailto:cruzpermornace19@gmail.com">Click here to email!</a>
      </motion.div>
    </StyledContact>
  );
};
