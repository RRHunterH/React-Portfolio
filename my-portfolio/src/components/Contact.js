import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setValidationMessages({ ...validationMessages, [name]: `Please fill out ${name}` });
    } else {
      setValidationMessages({ ...validationMessages, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationMessages({ ...validationMessages, name: 'Please fill out Name' });
      return;
    }
    if (!formData.email.trim()) {
      setValidationMessages({ ...validationMessages, email: 'Please fill out Email' });
      return;
    }
    if (!formData.message.trim()) {
      setValidationMessages({ ...validationMessages, message: 'Please fill out Message' });
      return;
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-background"></div>
      <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#fff' }}>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {validationMessages.name && <p>{validationMessages.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {validationMessages.email && <p>{validationMessages.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {validationMessages.message && <p>{validationMessages.message}</p>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
