// FooterLink.js
import React from 'react';

function FooterLink({ href, text }) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}

export default FooterLink;
