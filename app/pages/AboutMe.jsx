
import "../styles/AboutMe_module.css"
const AboutMe = () => {

  return (
    <>  
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
                  <div 
                  className='pdf-container'
                  style={{
                    position: 'relative',
                    paddingTop: '100%',
                    overflow: 'hidden',
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    margin: '16px',
                    maxWidth: '100%',
                  }}
                >
                <iframe
                  src="/resume.pdf"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title="Resume PDF"
            ></iframe>
          </div>
          <p style={{ textAlign: 'center', marginTop: '12px' }}>
            Unable to view the PDF? <a href="/resume.pdf" download>Download it here</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;