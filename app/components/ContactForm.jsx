'use client';
import { useState } from 'react';
import './styles/ContactForm_module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name || formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long.';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      const response = await fetch('https://formspree.io/f/mzzzybnz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='form-container'>
      {submitted ? (
        <p className='success-message'>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name" className='label'>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className='input'
            />
            {errors.name && <p className='error-message'>{errors.name}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor="email" className='label'>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className='input'
            />
            {errors.email && <p className='error-message'>{errors.email}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor="message" className='label'>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className='textarea'
            ></textarea>
            {errors.message && <p className='error-message'>{errors.message}</p>}
          </div>
          <button type="submit" className='button'>
            Submit
          </button>
          {error && <p className='error-message'>{error}</p>}
        </form>
      )}
    </div>
  );
};