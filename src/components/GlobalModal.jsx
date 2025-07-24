import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import checkmark from '../assets/images/checkmark.gif'

const GlobalModal = () => {
  const { isModalOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    phone: '',
    email: '',
    address: '',
    query: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

      setFormData({ name: '', date: '', phone: '', email: '', address: '', query: '' });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Error!', error.message);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <>
      {/* Main Form Modal */}
      <div className="modal form-modal fade show d-block" id='appointment-modal' tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Query Form</h1>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="form-row row">
                <div className="form-group col-md-6 form-floating mb-3">
                  <input
                    id="floatingInput1"
                    placeholder="Name"
                    className="form-control"
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingInput1">Your Name</label>
                </div>
                <div className="form-group col-md-6 form-floating mb-3">
                  <input
                    id="floatingInput2"
                    placeholder="name@example.com"
                    className="form-control"
                    autoComplete="off"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingInput2">Email address</label>
                </div>
                <div className="form-group col-md-6 form-floating mb-3">
                  <input
                    id="floatingInput3"
                    placeholder="0000-0000-00"
                    className="form-control"
                    autoComplete="off"
                    maxLength="10"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingInput3">Phone Number</label>
                </div>
                <div className="form-group col-md-6 form-floating mb-3">
                  <select
                    className="form-select form-control"
                    name="service"
                    id="floatingSelect"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Web Designing">Web Designing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="query"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: '100px' }}
                    value={formData.query}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
              </div>
              <div className="text-center">
                <button className="button w-100 submit_btn" type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : 'Submit'}
                    </button>
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>

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

export default GlobalModal;








