import React from 'react';

// Import process step images
import applyIcon from '../assets/images/web.png';
import documentIcon from '../assets/images/document.png';
import processingIcon from '../assets/images/call-center.png';
import submissionIcon from '../assets/images/package.png';

// Step data
const processSteps = [
  {
    title: 'Apply Online',
    image: applyIcon,
  },
  {
    title: 'Documentation',
    image: documentIcon,
  },
  {
    title: 'Processing',
    image: processingIcon,
  },
  {
    title: 'Final Submission',
    image: submissionIcon,
  },
];

const Process = () => {
  return (
    <section className="process_area custom_gap">
      <div className="container">
        <div className="title-box" data-aos="fade-right">
          <h4><span></span> Our Process</h4>
          <h3>How We Work</h3>
        </div>

        <div className="row">
          {processSteps.map((step, index) => (
            <div className="col-lg-3 col-md-3 col-6" key={index}>
              <div className="process-box text-center shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={step.image} alt={step.title} className="img-fluid" />
                <h3 className="mt-4">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
