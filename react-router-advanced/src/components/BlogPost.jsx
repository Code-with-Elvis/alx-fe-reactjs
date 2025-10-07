import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id, userId, postId } = useParams();

  const getBlogContent = () => {
    if (userId && postId) {
      return {
        title: `User ${userId}'s Blog Post ${postId}`,
        content: `This is the content of blog post ${postId} written by user ${userId}. This demonstrates dynamic routing with multiple parameters.`,
        author: `User ${userId}`,
        date: new Date().toLocaleDateString(),
      };
    } else if (id) {
      return {
        title: `Blog Post ${id}`,
        content: `This is the content of blog post ${id}. This demonstrates dynamic routing with URL parameters.`,
        author: `Author ${id}`,
        date: new Date().toLocaleDateString(),
      };
    }
    return {
      title: "Default Blog Post",
      content: "No specific post found.",
      author: "Unknown",
      date: new Date().toLocaleDateString(),
    };
  };

  const blog = getBlogContent();

  return (
    <section className="blog-post-page">
      <div className="container">
        <header>
          <Link to="/">← Back to Home</Link>
        </header>
        <h1>{blog.title}</h1>
        <p>
          <strong>Author:</strong> {blog.author}
        </p>
        <p>
          <strong>Date:</strong> {blog.date}
        </p>
        <div className="blog-content">
          <h3>Content:</h3>
          <p>{blog.content}</p>
        </div>

        {/* Display URL parameters for demonstration */}
        <div className="url-parameters">
          <h4>URL Parameters:</h4>
          {id && <p>Blog ID: {id}</p>}
          {userId && <p>User ID: {userId}</p>}
          {postId && <p>Post ID: {postId}</p>}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
