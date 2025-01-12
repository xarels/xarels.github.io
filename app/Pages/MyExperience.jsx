// In MyExperience.js or portfolio component
import React from 'react';
import Link from 'next/link';
import posts from '../data/postData.json'; // Adjust path if needed
import "../components/styles/MyExperience_module.css";

export const MyExperience = () => {
  return (
    <section className="portfolioSection">
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
              <Link href={``}>
                <span className="readMore">Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;
