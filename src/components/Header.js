import React from 'react';

// NavigationLink Component
function NavigationLink({ href, children }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

// SocialIcon Component
function SocialIcon({ href, svg }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
}

// Header Component
function Header() {
  const navLinks = [
    { href: '/en/about-us', text: 'About us' },
    { href: '/en/our-games', text: 'Our games' },
    { href: '/en/jobs', text: 'Join us' },
  ];


  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-3 header-logo">
            <a href="/en">
              <img src="/img/logo-5eac85f8.svg" alt="Logo" />
            </a>
          </div>
          <div className="col-md-8 col-xl-6">
            <nav className="header-nav">
              <ul data-depth="0">
                {navLinks.map((link, index) => (
                  <NavigationLink key={index} href={link.href}>
                    {link.text}
                  </NavigationLink>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
