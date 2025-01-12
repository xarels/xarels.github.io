import React from 'react'
import "./styles/AboutMe_module.css"
const AboutMe = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      // Simulate initial visibility change or animation trigger after mounting
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100); // Adjust delay as needed for animations
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

  return (
    <>
    <section id="aboutMe" className={`about-section ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="about-content">
            <div className="about-image">
             <img src="me.png" alt="[Your picture and Name]" loading="lazy" />
            </div>
            <div className="about-text">
            <h2>About Me</h2>
            <p>Creative graphic designer with 5+ years of experience in digital and print design.</p>
                <div className="skills">
                <h3>Expertise</h3>
                <ul>
                    <li>Brand Identity Design</li>
                    <li>Digital Illustration</li>
                    <li>Print Design</li>
                    <li>Photo Manipulation</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default AboutMe;