import React from 'react';
import chooseImg from '../assets/images/choose-1.png';

const visionData = [
  {
    icon: 'fa-eye',
    title: 'Vision',
    delay: 0,
    desc: 'To create an enduring partnership that will continuously key-in on focused improvement initiatives, and nurture a lasting culture of winning solutions and rewarding opportunities through technology.',
  },
  {
    icon: 'fa-lightbulb-o',
    title: 'Mission',
    delay: 100,
    desc: 'To procure a value-added technological environment for small-to-medium sized businesses that will spearhead business growth and foster innovative changes.',
  },
  {
    icon: 'fa-diamond',
    title: 'Values',
    delay: 200,
    desc: 'We believe that values have to be a guiding light for any meaningful and successful partnership, and must be reinforced on every level and every exchange...',
  },
];

const Choose = () => {
  return (
    <section className="vision_area position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <ul>
              {visionData.map((item, index) => (
                <li key={index} data-aos="fade-right" data-aos-delay={item.delay}>
                  <div className="vission-icon">
                    <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="vission-text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="vission-right">
              <figure>
                <img src={chooseImg} alt="Choose Us" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
