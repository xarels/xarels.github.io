import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "../components/styles/Contact_module.css";
import ContactForm from '../components/ContactForm';

export const Contact = () => {
    const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Simulate initial visibility change or animation trigger after mounting
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay as needed for animations
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'visible' : 'hidden'}`}>
    <h2>Contact Me</h2>
    <div className="contact-grid">
    <div className="contact-info">
      <h3>Let's Talk</h3>
      <p><FontAwesomeIcon className="i" icon= {faEnvelope}/> email@example.com</p>
      <p><FontAwesomeIcon className="i" icon= {faPhone}/> (123) 456-7890</p>
      <p><FontAwesomeIcon className="i" icon= {faLocationDot}/> City, Country</p>
    </div>
    <ContactForm />
    </div>
    </section>
  );
};
export default Contact;