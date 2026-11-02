// src/components/posts/Posts.jsx
import useFetch from '../../hooks/useFetch';

const Posts = () => {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts?.length) return <p>No posts found.</p>;

  return (
    <ul>
      {posts.slice(0, 10).map((post) => (
        <li key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;