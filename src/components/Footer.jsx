import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const socialLinks = [
  { icon: 'fa-envelope', url: 'mailto:infogictsolutions@gmail.com' },
  { icon: 'fa-facebook', url: 'https://www.facebook.com/profile.php?id=61560536847583' },
  { icon: 'fa-linkedin', url: '#' },
  { icon: 'fa-instagram', url: '#' },
];

const shortLinks = [
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-conditions' },
];

const helpLinks = [
  { name: 'About', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Our Services', path: '/our-services' },
  { name: 'Register', path: '/register' },
];

const contactInfo = [
  {
    icon: 'fa-phone',
    label: '7001906952',
    href: 'tel:7001906952',
  },
  {
    icon: 'fa-envelope-o',
    label: 'infogictsolutions@gmail.com',
    href: 'mailto:infogictsolutions@gmail.com',
  },
  {
    icon: 'fa-map-marker',
    label: '576, Anandapur Main Rd, Golpark, Sector I, Kasba, Kolkata, West Bengal 700107',
    href: 'https://maps.app.goo.gl/UjkWsUw62sSxBvJa7',
  },
];

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className="footer_area">
        <div className="container custom_container">
          <div className="row justify-content-between">
            {/* Logo and About */}
            <div className="col-xxl-4 col-lg-4 col-sm-9 col-12 col-md-7">
              <div className="footer_content">
                <Link className="navbar-brand" to="/" title="Gict Solutions" rel="home">
                  <img src={logo} alt="Gict Solutions" />
                </Link>
                <p>
                  We’re certified professionals and trusted to take a proactive approach to your
                  technology and propel you forward.
                </p>
                <ul className="social_link d-flex flex-wrap">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Short Links */}
            <div className="col-xxl-2 col-lg-2 col-sm-5 col-6 col-md-5">
              <div className="footer_content">
                <h3>Short Link</h3>
                <ul>
                  {shortLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Help Links */}
            <div className="col-xxl-2 col-lg-2 col-sm-6 col-6 col-md-5 order-md-4">
              <div className="footer_content">
                <h3>Help Link</h3>
                <ul>
                  {helpLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-xxl-3 col-lg-4 col-sm-9 col-12 col-md-7 order-lg-4">
              <div className="footer_content contact_details">
                <h3>Contact Us</h3>
                {contactInfo.map((item, index) => (
                  <p className="info" key={index}>
                    <span>
                      <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                    </span>
                    <a href={item.href}> {item.label}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer_bottom text-center pt-25 pb-25">
          <p>Copyright © Gict-Solutions 2024. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
