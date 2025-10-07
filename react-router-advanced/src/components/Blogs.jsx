import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    { id: 1, title: "Getting Started with React Router", author: "John Doe" },
    { id: 2, title: "Advanced Routing Techniques", author: "Jane Smith" },
    { id: 3, title: "Dynamic Routes in React", author: "Bob Johnson" },
    { id: 4, title: "Nested Routing Explained", author: "Elvis Okumu" },
  ];

  const userBlogs = [
    { userId: 1, postId: 1, title: "My First Post", author: "User 1" },
    { userId: 1, postId: 2, title: "React Tips and Tricks", author: "User 1" },
    {
      userId: 2,
      postId: 3,
      title: "JavaScript Best Practices",
      author: "User 2",
    },
    {
      userId: 3,
      postId: 4,
      title: "Web Development Journey",
      author: "User 3",
    },
  ];

  return (
    <section className="blogs-page">
      <div className="container">
        <header>
          <Link to="/">← Back to Home</Link>
        </header>
        <h1>All Blogs</h1>

        <h2>General Blog Posts</h2>

        <ul className="blog-list">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                {blog.title} by {blog.author}
              </Link>
            </li>
          ))}
        </ul>

        <h2>User-Generated Content</h2>
        <ul className="blog-list">
          {userBlogs.map((blog) => (
            <li key={`${blog.userId}-${blog.postId}`}>
              <Link to={`/user/${blog.userId}/posts/${blog.postId}`}>
                {blog.title} by {blog.author}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
