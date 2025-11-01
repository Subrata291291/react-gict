import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { useModal } from '../context/ModalContext';

const Header = () => {
  const { openModal } = useModal();
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const date = dateTime.toISOString().split('T')[0]; // yyyy-mm-dd
  const time = dateTime.toLocaleTimeString();

  return (
    <div>
      <section className="top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 d-none d-md-block">
              <div className="top-left">
                <ul className="d-flex justify-content-space-between align-items-center">
                  <li>
                    <p>
                      <a href="mailto:infogictsolutions@gmail.com">
                        <span><i className="fa fa-envelope"></i></span> infogictsolutions@gmail.com
                      </a>
                    </p>
                  </li>
                  <li className='d-md-none d-lg-block'>
                    <p>
                      <span><i className="fa fa-clock"></i></span> 24/7 Customer Support
                    </p>
                  </li>
                  <li>
                    <p>
                      <span><i className="fa fa-calendar-check"></i></span>{' '}
                      <span id="current-day">{day}</span>{' '}
                      <span id="current-date">{date}</span>{' '}
                      <span id="current-time">{time}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-2">
              <div className="top-right">
                <ul className="d-flex align-items-center">
                  <li><a href="https://www.facebook.com/profile.php?id=61560536847583" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

       <header className="header_area w-100 shadow">
      <nav className="navbar navbar-expand-md">
        <div className="container position-relative">
          <Link className="navbar-brand" to="/" title="Gict Solutions" rel="home">
            <img src={logo} alt="Gict Solutions" />
          </Link>

          <button className="navbar-toggler p-0 border-0" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
            <div className="navbar_icon">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-lg-0 primary_nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Our Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/academy" className="nav-link">Gict Academy</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/quotation" className="nav-link">Get Quotation</NavLink>
              </li>
            </ul>
          </div>

          <div className="offcanvas offcanvas-start d-lg-none d-md-none d-block" id="offcanvasExample" tabIndex="-1" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <img src={logo} alt="Gict Solutions" />
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto me-auto mb-lg-0 primary_nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">Our Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/academy" className="nav-link">Gict Academy</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/quotation" className="nav-link">Get Quotation</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <ul className="right_menu">
            {/* <li className="search-icon">
              <button id="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </li> */}
            <li className="get-quote-btn d-lg-block d-md-block d-block">
              <button onClick={openModal}>
                Get Quote <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </li>
            <li className="call-us-top">
              <div className="call-icon position-relative">
                <span><i className="fa fa-volume-control-phone" aria-hidden="true"></i></span>
              </div>
              <div className="call-now">
                <p>Call Us <br />
                  <a href="tel:7001906952">
                    <span>7001906952</span>
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="search-box shadow" id="search-modal">
        <div className="container">
          <form action="">
            <div className="form-floating form-box">
              <input type="text" className="form-control" id="floatingInput" required placeholder="Search for any service..." />
              <label htmlFor="floatingInput">Search for Services...</label>
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <button type="button" className="btn-close close-btn" id="close-modal"></button>
          </form>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
