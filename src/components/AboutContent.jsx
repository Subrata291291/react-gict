import React from 'react';
import about1 from '../assets/images/about-1.png'
import about2 from '../assets/images/about-2.jpg'
import { useNavigate } from 'react-router-dom';

const aboutData = {
  experienceYears: '10 Years',
  experienceText: 'Working Experience',
  images: {
    main: about1,
    secondary: about2

},
  title: 'About Us',
  subtitle: 'Selecting the Finest IT Service Provider',
  description: `Welcome to Gict Solutions, where we specialize in crafting exceptional web experiences tailored to your business needs. Our team of seasoned developers and designers is dedicated to creating responsive, user-friendly websites that drive engagement and deliver results. Whether you're looking to launch a new site, optimize an existing one, or explore custom web solutions, we're here to turn your vision into reality. Partner with us for expert guidance, innovative solutions, and a commitment to exceeding your expectations. Let's build something amazing together.`,
  items: [
    {
      icon: 'fa-cog',
      title: 'Business Growth',
      text: 'We fuel your business growth through innovative web solutions that amplify your online presence and drive measurable results.'
    },
    {
      icon: 'fa-cog',
      title: 'Client Priorities',
      text: 'We put our clients first. Once the contract is signed, the real work and real relationships begin.'
    }
  ]
};

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about-area custom_gap">
      <div className="container">
        <div className="row">

          {/* LEFT IMAGE SECTION */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="about-left position-relative">
              <img src={aboutData.images.main} alt="about-1" className="about-main-pic position-relative" />
              <img src={aboutData.images.secondary} alt="about-2" className="about1-pic position-absolute" />
              <div className="experience-box text-center position-absolute">
                <i className="fa fa-trophy" aria-hidden="true"></i>
                <p>
                  <strong>{aboutData.experienceYears}</strong><br />
                  {aboutData.experienceText}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="about-right">
              <div className="title-box">
                <h4 data-aos="fade-right">
                  <span></span> {aboutData.title}
                </h4>
                <h3 data-aos="fade-right">{aboutData.subtitle}</h3>
              </div>
              <p className="about-text" data-aos="fade-right">
                {aboutData.description}
              </p>

              {aboutData.items.map((item, index) => (
                <div className="abt-cmn-box aos-init" data-aos="fade-right" key={index}>
                  <ul className="d-flex align-items-center justify-content-space-between">
                    <li className="groth-icon">
                      <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                    </li>
                    <li className={index === 0 ? "groth-text" : "tech-text"}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </li>
                  </ul>
                </div>
              ))}

              <button className="btn button common-btn position-relative" onClick={() => navigate('/about')}>
                About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
