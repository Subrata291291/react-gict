import React from 'react';
import Slider from 'react-slick';
import service2 from '../assets/images/service-2.jpg'
import service4 from '../assets/images/service-4.png'
import service1 from '../assets/images/service-1.jpg'
import service3 from '../assets/images/service-3.jpg'
import shape9 from '../assets/images/shape-9.png'
import shape10 from '../assets/images/shape-10.png'
import shape11 from '../assets/images/shape-11.png'

import { useModal } from '../context/ModalContext';

const serviceData = [
  {
    title: 'Web Development',
    desc: 'We redefine web development with ingenuity and excellence. Our team of web developers specializes in building websites that convert leads with ease.',
    image: service2,
  },
  {
    title: 'Logo Designing',
    desc: 'We digitally shape your ideas while combining ultra-modern features and innovative policies. Our efficient graphics team will make your brand logo using world-class technologies.',
    image: service4,
  },
  {
    title: 'Digital Marketing',
    desc: 'We help customers to find your products with ads that appear in related shopping results and product pages.',
    image: service1,
  },
  {
    title: 'Web Designing',
    desc: 'We digitally shape your ideas while combining ultra-modern features and innovative policies. Our efficient team of experts develop amazing solutions using world-class technologies.',
    image: service3,
  },
];

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, // tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // mobile
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const Services = () => {
  const { openModal } = useModal();
  return (
    <section className="service_area position-relative" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-left" data-aos="fade-right">
          <h4><span></span> Services we're offering</h4>
          <h3>Exclusive IT Services</h3>
        </div>

        <div className="shapes">
          <img src={shape9} alt="shape-9" className="shape9 img-fluid" />
          <img src={shape10} alt="shape-10" className="shape10 img-fluid" />
          <img src={shape11} alt="shape-11" className="shape11 w-100 img-fluid" />
        </div>

        <Slider {...sliderSettings} className="service_slider mt-4">
          {serviceData.map((service, index) => (
            <div className="slider position-relative" key={index}>
              <div className="service-box">
                <div className="service-pic">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-cat mt-4">{service.title}</h3>
                  <p className="servie-des mt-4 mb-4">{service.desc}</p>
                  <a style={{ cursor: 'pointer' }} onClick={openModal} className="read-more">
                    Get Quote
                    <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
