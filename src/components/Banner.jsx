import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

import shape1 from '../assets/images/shape-1.png'
import shape4 from '../assets/images/shape-4.png'
import shape5 from '../assets/images/shape-5.png'

const slides = [
  {
    id: 1,
    subtitle: 'Technology Consultancy',
    title: 'Make the Easiest Solutions for you',
    shape1: shape1,
    shape2: shape4,
    shape3: shape5,
  },
  {
    id: 2,
    subtitle: 'UI/UX Technology Solutions',
    title: 'Empowering Your Business with us',
    shape1: shape1,
    shape2: shape4,
    shape3: shape5,
  },
  {
    id: 3,
    subtitle: 'Web Development Consultancy',
    title: 'Make the Easiest Solutions for you',
    shape1: shape1,
    shape2: shape4,
    shape3: shape5,

  }
];

const Banner = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  return (
    <section className="banner_area position-relative">
      <Slider {...settings} className="banner_slider">
        {slides.map((slide, index) => (
          <div className={`slider position-relative slider-${index + 1}`} key={slide.id}>
            <div className="container">
              <div className="banner_box" data-aos="fade-right">
                <h4>
                  <span></span> {slide.subtitle}
                </h4>
                <h3>{slide.title}</h3>
                <button className="button btn order-btn" onClick={() => navigate('/about')}>Check Us</button>
              </div>
            </div>
            <div className="shapes">
              <span className="shape1">
                <img src={`${slide.shape1}`} alt="shape1" />
              </span>
              <span className="shape2">
                <img src={`${slide.shape2}`} alt="shape2" />
              </span>
              <span className="shape3">
                <img src={`${slide.shape3}`} alt="shape3" />
              </span>
              <span className="shape2">
              </span>
              <span className="shape3">
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;