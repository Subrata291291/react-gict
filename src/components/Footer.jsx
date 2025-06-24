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
  { name: 'Our Services', path: '/services' },
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
      {/* Modal (Bootstrap 5 style - trigger it with a button elsewhere using data-bs-toggle) */}
      <div className="modal fade form-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Query Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form action="thankyou.php" method="post">
                <div className="container">
                  <div className="form-row row">
                    <div className="form-group col-md-6 form-floating mb-3">
                      <input type="text" name="name" id="floatingInput1" placeholder="Name" className="form-control" autoComplete="off" required />
                      <label htmlFor="floatingInput1">Your Name</label>
                    </div>
                    <div className="form-group col-md-6 form-floating mb-3">
                      <input type="email" name="email" className="form-control" id="floatingInput2" placeholder="name@example.com" autoComplete="off" required />
                      <label htmlFor="floatingInput2">Email address</label>
                    </div>
                    <div className="form-group col-md-6 form-floating mb-3">
                      <input type="tel" name="phone" className="form-control" id="floatingInput3" placeholder="0000-0000-00" maxLength="10" autoComplete="off" required />
                      <label htmlFor="floatingInput3">Phone Number</label>
                    </div>
                    <div className="form-group col-md-6 form-floating mb-3">
                      <select className="form-select form-control" name="service" id="floatingSelect" aria-label="Service selection" required>
                        <option value="">Select Service</option>
                        <option value="Web Designing">Web Designing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" name="query" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} />
                      <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" name="submit" className="submit_btn button">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
