import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "../styles/Contact_module.css";
import ContactForm from '../components/ContactForm';

export const Contact = () => {

  return (
    <>
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
    </>
  );
};
export default Contact;