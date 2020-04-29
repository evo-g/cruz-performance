import React from 'react';
import { StyledContact } from './Contact.styled';

export default function Contact() {
  return (
    <StyledContact>
      <h2>For pricing and more information</h2>
      <a href="tel:6194024165">Call us at 619-402-4165</a>
      <h2>Or Text</h2>
      <a href="sms:+16194024165&amp;body=Hi%2520there%252C%2520I%2527d%2520like%2520to...">Click here to text us!</a>
    </StyledContact>
  )
}
