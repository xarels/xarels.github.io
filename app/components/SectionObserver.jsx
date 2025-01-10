import { useEffect } from 'react';

const SectionObserver = () => {
  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== 'undefined') {
      const sections = document.querySelectorAll('section');
      const main = document.querySelectorAll('main');
      const observerOptions = {
        threshold: 0.1, // When 10% of the section is in view
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, observerOptions);

      main.forEach((main) => {
        observer.observe(main);
      });

      sections.forEach((section) => {
        observer.observe(section);
      });

      // Cleanup observer when the component is unmounted
      return () => {
        main.forEach((main) => {
          observer.unobserve(main);
        });

        sections.forEach((section) => {
          observer.unobserve(section);
        });

      };
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return null; // No UI, just behavior
};

export default SectionObserver;