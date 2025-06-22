import React from 'react';

const contactDetails = {
  phone: '7001906952',
  email: 'infogictsolutions@gmail.com',
  address: '576, Anandapur Main Rd, Golpark, Sector I, Kasba, Kolkata, West Bengal 700107',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7513169566923!2d88.40055022507588!3d22.51351172953384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02712b32cb41a9%3A0x3cfcc66bd5fbb833!2sRUBY%20GENERAL%20HOSPITAL%2C%20576%2C%20Anandapur%20Main%20Rd%2C%20Golpark%2C%20Sector%20I%2C%20Kasba%2C%20Kolkata%2C%20West%20Bengal%20700107!5e0!3m2!1sen!2sin!4v1716215919458!5m2!1sen!2sin',
};

const Contact = () => {
  return (
    <section className="contact-area p-60">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="contact-left">
              <h3 className="contact-text">Contact Information</h3>
              <p className="contact-para">
                Fill the form below or write us. We will help you as soon as possible.
              </p>
              <ul className="d-flex contact-box">
                <li>
                  <p className="phone-icon">
                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </p>
                  <h3>Phone</h3>
                  <span>{contactDetails.phone}</span>
                </li>
                <li>
                  <p className="phone-icon">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </p>
                  <h3>Mail</h3>
                  <span>{contactDetails.email}</span>
                </li>
              </ul>
              <div className="address-area">
                <ul className="d-flex jusify-content-between">
                  <li>
                    <p className="map-icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </p>
                  </li>
                  <li>
                    <h3>Address</h3>
                    <p>{contactDetails.address}</p>
                  </li>
                </ul>
                <iframe
                  src={contactDetails.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="contact-right">
              <h3 className="contact-heading text-center">Get In Touch</h3>
              <form className="row g-3 mt-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email Address" required />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Your Address" required />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control" placeholder="Phone Number" required />
                </div>
                <div className="col-md-6">
                  <select className="form-select" required>
                    <option value="">Select a Service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphics Designing">Graphics Designing</option>
                    <option value="Web Designing">Web Designing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Logo Design">Logo Design</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="submit_btn button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
