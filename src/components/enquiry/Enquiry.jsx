import React, { useState } from 'react';
import './enquiry.css';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    enquiry: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      contactNo: '',
      email: '',
      enquiry: ''
    });
  };

  return (
    <div id='enquire' className="container">
<div className="enquiry-form">
      <h2>Gym Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact Number:</label>
          <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">Enquiry:</label>
          <textarea id="enquiry" name="enquiry" value={formData.enquiry} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default Enquiry;
