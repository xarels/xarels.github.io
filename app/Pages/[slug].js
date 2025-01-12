// pages/posts.js
import { useRouter } from 'next/router';
import posts from '../data/postData.json'; // Adjust the path if needed
import '../../components/styles/Post_module.css';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query; // Retrieve slug from the query

  console.log(router.query); // Debugging to see if the query parameter is passed

  // If no slug is found, show a loading state or error
  if (!slug) {
    return <p>Loading...</p>;
  }

  // Find the post based on the slug
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>; // Handle 404 if the post is not found
  }

  return (
    <div className="post">
      <h1 className="title">{post.title}</h1>
      <img src={post.image} alt={post.title} className="image" />
      <p className="description">{post.description}</p>
    </div>
  );
}
