import React from 'react';
import Slider from 'react-slick';

// Import your local images (replace with your actual paths)
import project1 from '../assets/images/calcutta-delights.jpg';
import project1Large from '../assets/images/calcutta-delights.png';
import project2 from '../assets/images/makeup.jpg';
import project2Large from '../assets/images/makeup.png';
import project3 from '../assets/images/echoshop.jpg';
import project3Large from '../assets/images/echoshop.png';
import project4 from '../assets/images/travel.png';
import project4Large from '../assets/images/travelLarge.png';
import pawcrush from '../assets/images/pawcrush.png';
import pawcrushLarge from '../assets/images/pawcrushLarge.png';
import music from '../assets/images/music.png';
import musicLarge from '../assets/images/musicLarge.png';
import portfolio from '../assets/images/portfolio.png';
import portfolioLarge from '../assets/images/portfolioLarge.png';


const projects = [
  {
    title: 'Calcutta Delights',
    image: project1,
    largeImage: project1Large,
    liveLink: 'https://calcuttadelights.nl/',
  },
  {
    title: 'Makeup',
    image: project2,
    largeImage: project2Large,
    liveLink: 'https://makeoverbynandita.com/',
  },
  {
    title: 'EchoShop',
    image: project3,
    largeImage: project3Large,
    liveLink: 'http://mydem021.unaux.com',
  },
  {
    title: 'Petmenia',
    image: project4,
    largeImage: project4Large,
    liveLink: 'http://mydem06.unaux.com',
  },
  {
    title: 'Pawcrush',
    image: pawcrush,
    largeImage: pawcrushLarge,
    liveLink: 'https://pawcrush.in',
  },
  {
    title: 'Music',
    image: music,
    largeImage: musicLarge,
    liveLink: 'https://musicsbox.netlify.app',
  },
  {
    title: 'Portfolio',
    image: portfolio,
    largeImage: portfolioLarge,
    liveLink: 'https://subratahaldar.netlify.app',
  },
];

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1, arrows: false, },
    },
  ],
};

const Projects = () => {
  return (
    <section className="project_area">
      <div className="container">
        <div className="title-box" data-aos="fade-right">
          <h4><span></span> Projects</h4>
          <h3>Our Recent Projects</h3>
        </div>

        <Slider {...sliderSettings} className="project_slider p-0 mt-4">
          {projects.map((project, index) => (
            <div className="slider position-relative" key={index}>
              <div className="project-box position-relative">
                <div className="project-pic">
                  <img src={project.image} alt={project.title} className="w-100 img-fluid" />
                </div>
                <div className="project-links content">
                  <a
                    href={project.largeImage}
                    data-fancybox="mygallery"
                    className="quick-btn"
                  >
                    <span>Quick View</span>
                  </a>
                  <span className="divider">|</span>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="More Details"
                  >
                    <span>Live Link</span>
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

export default Projects;
