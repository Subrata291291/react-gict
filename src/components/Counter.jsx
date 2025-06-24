import React from 'react';

// Counter data array
const counterData = [
  {
    count: 500,
    iconClass: 'fa fa-user',
    label: 'Customer Serve',
  },
  {
    count: 450,
    iconClass: 'fa fa-users',
    label: 'Happy Customer',
  },
  {
    count: 50,
    iconClass: 'fa fa-user',
    label: 'Experienced Developer',
  },
  {
    count: 1759,
    iconClass: 'fa fa-trophy',
    label: 'Winning Award',
  },
];

const Counter = () => {
  return (
    <section className="counter_area">
      <div className="container custom_container">
        <div className="row">
          {counterData.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="counter_box text-center">
                <div
                  className="counter_text count"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h5>{item.count}</h5>
                </div>
                <span>
                  <i className={item.iconClass} aria-hidden="true"></i>
                </span>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
