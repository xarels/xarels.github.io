import posts from '../../data/postData.json';
import '../../components/styles/Post_module.css';

// Static paths that Next.js will pre-generate at build time
export async function getStaticPaths() {
  // Generate the paths for each post based on its slug
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false }; // Set fallback to false for 404 handling
}

// Fetch the data for the post based on its slug
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  // Return post data as props
  return {
    props: { post },
  };
}

export default function PostPage({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post">
      <h1 className="title">{post.title}</h1>
      <img src={post.image} alt={post.title} className="image" />
      <p className="description">{post.description}</p>
    </div>
  );
}
