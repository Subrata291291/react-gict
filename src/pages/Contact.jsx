import React, { useState } from 'react';
import contactFormData from '../data/contactFormData';
import checkmark from '../assets/images/checkmark.gif';

const contactDetails = {
  phone: '7001906952',
  email: 'infogictsolutions@gmail.com',
  address: '576, Anandapur Main Rd, Golpark, Sector I, Kasba, Kolkata, West Bengal 700107',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    service: '',
    query: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx8LzUNf0s5-Nq5DDh5gVt1z-GaaRRTJpDKAg--3FNXy-Ug6yQsMXPIr5pO6pENd4U1UQ/exec';
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: form
      });

      setFormData({ name: '', email: '', address: '', phone: '', service: '', query: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Submission Error:', error.message);
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section className="contact-area p-60">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="contact-left">
              <h3 className='contact-text'>Contact Information</h3>
              <p className='contact-para'>Fill the form below or write us. We will help you as soon as possible.</p>
              <ul className="d-md-flex contact-box">
                <li className='mb-4 mb-md-0'><p className='phone-icon'><i className="fa fa-volume-control-phone"></i></p><h3>Phone:</h3> <span>{contactDetails.phone}</span></li>
                <li className='mb-4 mb-md-0'><p className='phone-icon'><i className="fa fa-envelope"></i></p><h3>Email:</h3> <span>{contactDetails.email}</span></li>
              </ul>
              <div className="address-area">
                <ul className='d-flex gx-md-5'>
                  <li>
                    <p className='map-icon'><i className="fa fa-map-marker"></i></p>
                  </li>
                  <li>
                    <h3>Address:</h3>
                    <p>{contactDetails.address}</p>
                  </li>
                </ul>
              </div>
              <iframe
                src={contactFormData.mapEmbedUrl}
                width="100%" height="200" style={{ border: 0 }}
                allowFullScreen="" loading="lazy" title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="col-md-6">
            <div className="contact-right">
              <h3 className="contact-heading text-center">Get In Touch</h3>
              <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control" placeholder="Email Address" required />
                </div>
                <div className="col-12">
                  <input name="address" value={formData.address} onChange={handleChange} type="text" className="form-control" placeholder="Your Address" required />
                </div>
                <div className="col-md-6">
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="form-control" placeholder="Phone Number" required />
                </div>
                <div className="col-md-6">
                  <select name="service" value={formData.service} onChange={handleChange} className="form-select form-control" required>
                    <option value="">Select a Service</option>
                    {contactFormData.services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <textarea name="query" value={formData.query} onChange={handleChange} className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="submit_btn button w-100" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ✅ Thank You Modal */}
          {submitted && (
            <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-center">
                  <div className="modal-header border-0">
                    <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
                  </div>
                  <div className="modal-body pb-4">
                    <img src={checkmark} alt="Thank you" width="100" />
                    <h4 className="mt-3">Thanks for contacting us. We’ll get back to you shortly.</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
          </>
  );
};

export default Contact;