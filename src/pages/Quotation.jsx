import React, { useState } from 'react';
import checkmark from '../assets/images/checkmark.gif';
import '../assets/css/quotation.css';

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    projectType: '',
    requirements: '',
    colors: '',
    features: '',
    deadline: '',
    budget: '',
    notes: '',
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    setIsSubmitting(true);

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    fetch('https://script.google.com/macros/s/AKfycbx8LzUNf0s5-Nq5DDh5gVt1z-GaaRRTJpDKAg--3FNXy-Ug6yQsMXPIr5pO6pENd4U1UQ/exec', {
      method: 'POST',
      body: form,
    })
      .then((res) => res.text())
      .then(() => {
        setFormData({
          clientName: '',
          email: '',
          phone: '',
          service: '',
          requirements: '',
          colors: '',
          features: '',
          deadline: '',
          budget: '',
          notes: '',
          agreeTerms: false,
        });
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);

        if (window.bootstrap && document.getElementById('thankYouModal')) {
          const thankYouModal = new window.bootstrap.Modal(document.getElementById('thankYouModal'));
          thankYouModal.show();
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        alert('There was an error submitting the form.');
        console.error(err);
      });
  };

  return (
    <section className="quotation-area p-70" id="quotation">
      <div className="container">
        {/* <h2 className="title">Web Development Quotation Request Form</h2> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="clientName">Client Name / Company</label>
          <input type="text" id="clientName" value={formData.clientName} onChange={handleChange} required />

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="email">Client Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone">Client Phone</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <label htmlFor="service">Project Type</label>
          <select id="service" value={formData.service} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Custom Web App">Custom Web App</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="requirements">Project Requirements / Pages Needed</label>
          <textarea id="requirements" value={formData.requirements} onChange={handleChange} rows="3" required />

          <label htmlFor="colors">Color Preferences</label>
          <textarea id="colors" value={formData.colors} onChange={handleChange} rows="1" required placeholder="#2c3e50 , #3498db" />

          <label htmlFor="features">Additional Features</label>
          <textarea id="features" value={formData.features} onChange={handleChange} rows="3" placeholder="e.g., WhatsApp chat, Payment Gateway, Analytics, SEO..." />

          <label htmlFor="deadline">Expected Delivery Deadline</label>
          <input type="date" id="deadline" value={formData.deadline} onChange={handleChange} required />

          {/* <label htmlFor="budget">Estimated Budget (INR)</label>
          <input type="number" id="budget" value={formData.budget} onChange={handleChange} required /> */}

          <label htmlFor="notes">Any Other Notes or Expectations</label>
          <textarea id="notes" value={formData.notes} onChange={handleChange} rows="3" />

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              I have read and agree to the quotation details below.
            </label>
          </div>
          <div className="clearfix"></div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              'Submit Quotation Request'
            )}
          </button>
        </form>
        <div class="section quotaion-area">
      <h3>Quotation Details & Terms</h3>
 
      <div className="quote-box">
        <h4><span><i className="fa-solid fa-hands-holding-circle"></i></span> Project Inclusions:</h4>
        <ul>
            <li><b>Website Type:</b> Business Website / E-commerce / Portfolio / Custom Web App</li>
            <li><b>Pages:</b> Home, About, Services, Contact, Portfolio, Admin Panel (if required)</li>
            <li>Responsive Design, SEO-Friendly Structure</li>
            <li><b>Tech Stack:</b> ReactJS, NodeJS, Laravel, WordPress (as per project)</li>
            <li><b>Optional Features:</b> WhatsApp Chat, Analytics, Payment Gateway, Form Integration</li>
        </ul>
      </div>
      <div className="quote-box">
        <h4><span><i className="fa-solid fa-sack-dollar"></i></span> Cost Estimate (Example):</h4>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Cost (INR)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Design & Development</td>
                <td>₹ XX,XXX</td>
                </tr>
                <tr>
                <td>Domain & Hosting (Extra Charge)</td>
                <td>₹ XX,XXX</td>
                </tr>
                <tr>
                <td>Maintenance (optional)</td>
                <td colspan="2">₹ X,XXX</td>
                </tr>
                <tr>
                <th scope="row">Total</th>
                <td colspan="2"><b>₹ XX,XXX</b></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className="quote-box">
        <h4><span><i className="fa-solid fa-box-archive"></i></span> Delivery Timeline:</h4>
        <ul>
            <li>Design Mockups: <b>5</b> Days</li>
            <li>HTML: <b>12</b> Days</li>
            <li>Development: <b>10</b> Days</li>
            <li>Testing & Revisions: <b>3</b> Days</li>
            <li>Estimated Total: <b>30</b> Working Days</li>
        </ul>
      </div>
 
      <div className="quote-box">
        <h4><span><i class="fa-solid fa-credit-card"></i></span> Payment Terms:</h4>
        <ul>
            <li><b>20%</b> Advance on Mockup Confirmation</li>
            <li><b>30%</b> on HTML Approval</li>
            <li><b>50%</b> on Final Delivery (before deployment)</li>
        </ul>
      </div>
 
      <div className="quote-box">
        <h4><span><i class="fa-brands fa-teamspeak"></i></span> Terms & Conditions:</h4>
        <ul>
            <li>Quotation valid for <b>15</b> days</li>
            <li>Additional features may incur extra charges</li>
            <li>Delays from the client’s end may affect timelines</li>
            <li>Final source code is delivered post final payment</li>
            <li>Post-launch maintenance charged separately unless included</li>
        </ul>
      </div>
    </div>

        {/* Thank You Modal */}
        {submitted && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center">
                      <div className="modal-header border-0">
                        <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
                      </div>
                      <div className="modal-body pb-4">
                        <img src={checkmark} alt="Thank you" width="100" />
                        <h4 className="mt-3">Thanks for your quotation request! We'll reach out shortly.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
      </div>
    </section>
  );
};

export default QuotationForm;
