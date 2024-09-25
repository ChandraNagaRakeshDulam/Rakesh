import React, { useState } from 'react';
import './Connect.css';
import emailjs from 'emailjs-com';

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_tbfr2t8', 
      'template_tjukxgh', 
      formData, 
      '74lpq_HaK4XdxrzaI'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <section className="connect" id="connect">
      <h2>Connect</h2>
      <div className="connect-container">
        <div className="connect-image">
          <img 
            src="https://t4.ftcdn.net/jpg/01/09/23/89/360_F_109238979_8qLUFshVRXss6meBwqudhyDCxAcURXYP.jpg" 
            alt="Connect" 
            className="animated-image" 
          />
        </div>
        <div className="connect-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
