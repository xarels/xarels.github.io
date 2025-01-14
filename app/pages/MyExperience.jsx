import { useRouter } from 'next/navigation';
import posts from '../data/postData.json'; // Adjust path if needed
import "../styles/MyExperience_module.css";

export const MyExperience = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/posts/${id}`);
  }

  return (
    <>
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
    </>
  );
};

export default MyExperience;
