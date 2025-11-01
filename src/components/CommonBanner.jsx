import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const routeNames = {
  '/about': 'About',
  '/services': 'Our Services',
  '/contact': 'Contact Us',
  '/academy': 'Gict Academy',
  '/quotation': 'Gict Quotation',
};

const CommonBanner = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = routeNames[currentPath] || 'Page';

  return (
    <section className="commone_banner text-center">
      <h3>{pageTitle}</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>/</li>
        <li><span className="active">{pageTitle}</span></li>
      </ul>
    </section>
  );
};

export default CommonBanner;
