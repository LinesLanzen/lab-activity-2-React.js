// Footer.js
import React from 'react';
import FooterLink from '../FooterLink';

const footerLinks = [
  { href: "/corporate", text: "Corporate" },
  { href: "/user-agreement", text: "User Agreement" },
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/cookie-policy", text: "Cookie Policy" },
  { href: "/store", text: "Store" },
  { href: "/forum", text: "Forum" },
  { href: "/support", text: "Support" },
  { href: "/tmf", text: "TMF" },
  { href: "/spokko", text: "Spokko" },
  { href: "/gog", text: "GOG" }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          {footerLinks.map(link => (
            <FooterLink key={link.href} href={link.href} text={link.text} />
          ))}
        </ul>
        <div className="footer-bottom">
          <p>© 2024 All rights reserved.</p>
          <a href="/cookie-declaration">Cookie Declaration</a>
          <img src={`${process.env.PUBLIC_URL}/img/rebels-ed247fee.svg`} alt="Rebels" className="footer-image" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;


