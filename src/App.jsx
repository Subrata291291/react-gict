import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

import Header from './components/Header';
import Footer from './components/Footer';
import CommonBanner from './components/CommonBanner';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import GlobalModal from './components/GlobalModal';
import { ModalProvider } from './context/ModalContext';

function Layout() {
  const location = useLocation();
  const showBanner = location.pathname !== '/';

  return (
    <>
    <ModalProvider>
      <Header />
      {showBanner && <CommonBanner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <GlobalModal />
      </ModalProvider>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-back',
      once: true,
    });

    Fancybox.bind('[data-fancybox="mygallery"]', {});
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
