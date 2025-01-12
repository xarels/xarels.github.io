// In MyExperience.js or portfolio component
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import posts from '../data/postData.json'; // Adjust path if needed
import "../components/styles/MyExperience_module.css";

export const MyExperience = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    // Simulate initial visibility change or animation trigger after mounting
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay as needed for animations
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

const handleClick = (id) => {
  router.push(`/posts/${id}`);
}

  return (
    <section id="myExperience" className={`portfolioSection ${isVisible ? 'visible' : 'hidden'}`}>
      <h2 className="sectionTitle">Latest Projects</h2>
      <div className="grid">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <img
              src={post.image}
              alt={post.title}
              className="cardImage"
            />
            <div className="cardContent">
              <h3 className="cardTitle">{post.title}</h3>
              <p className="cardDescription">{post.description}</p>
              {/* Use query parameters for dynamic routing */}
              <li key={post.id}>
                <button onClick={() => handleClick(post.id)} className="readMore">Read More</button>
              </li>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;
