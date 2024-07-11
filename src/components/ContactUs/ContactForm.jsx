import React, { useState } from 'react';
import "./ContactForm.css";

export function ContactForm(props) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className='contact-content-fillbox'>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <label>Email Address</label>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        <label>Message </label>
        <textarea type="text" name="message" style={{ height: 200, verticalAlign: 'top' }} value={formData.message} onChange={handleInputChange} />
        <div className='details-button-container'>
          <button type='submit' className='details-submit-button'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

