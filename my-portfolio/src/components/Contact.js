import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Please fill out your name.');
      return;
    }
    if (!formData.email) {
      alert('Please fill out your email.');
      return;
    }
    if (!formData.message) {
      alert('Please fill out your message.');
      return;
    }
    // Send form data to backend or perform further actions
  };

  return (
    <section className="contact-container">
      <div className="contact-background"></div>
      <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#fff' }}>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default Contact;