import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'Website Inquiry',
    dates: '',
    propertyInterest: '',
    guests: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    setStatus({ loading: true, success: false, error: null });
    
    try {
      // Add a delay to ensure we see loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Make the API call
      const response = await axios.post('/api/contact', formData);
      
      console.log('Form submission response:', response.data);
      
      // Clear form data on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        inquiryType: 'Website Inquiry',
        dates: '',
        propertyInterest: '',
        guests: ''
      });
      
      // Show success message
      setStatus({ loading: false, success: true, error: null });
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Show error message
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.response?.data?.error || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <div className="contact-form-container">
      {status.success ? (
        <div className="success-message">
          <h3>Thank you for your message!</h3>
          <p>We have received your inquiry and will be in touch soon.</p>
          <button 
            onClick={() => setStatus({ loading: false, success: false, error: null })}
            className="submit-button"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="dates">What dates are you interested in?</label>
            <input
              type="text"
              id="dates"
              name="dates"
              value={formData.dates}
              onChange={handleChange}
              placeholder="e.g., Dec 20, 2024 - Jan 3, 2025"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="text"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="e.g., 4 adults, 2 children"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="propertyInterest">Which property are you interested in?</label>
            <input
              type="text"
              id="propertyInterest"
              name="propertyInterest"
              value={formData.propertyInterest}
              onChange={handleChange}
              placeholder="e.g., Altitude Retreat, or any 4-bedroom property"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Additional Information *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Please provide any additional details about your stay."
              rows={5}
            />
          </div>
          
          {status.error && (
            <div className="error-message">
              <p>{status.error}</p>
              <p>Please try again or contact us directly at ben@acehost.ca or +1 604 764 8919.</p>
            </div>
          )}
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={status.loading}
          >
            {status.loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      )}
    </div>
  );
} 