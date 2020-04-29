import React from 'react';
import { StyledPricing } from './Pricing.styled';

export default function Pricing() {
  return (
    <StyledPricing>
      <h2>Call for Pricing</h2>
      <a href="tel:6194024165">Call us at 619-402-4165</a>
      <h2>Or Text</h2>
      <a href="sms:+16194024165">Click here to text us!</a>
    </StyledPricing>
  )
}