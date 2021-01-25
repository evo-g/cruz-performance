import React from 'react';
import { StyledContact } from './Contact.styled';

export default function Contact() {
  return (
    <StyledContact>
      <h2>For pricing and more information</h2>
      <a href="tel:6194024165">Call us at 619-402-4165</a>
      <h2>Or Text</h2>
      <a href="sms:+16194024165">Click here to text us!</a>
    </StyledContact>
  );
};
