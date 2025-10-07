import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h1 className="">🔀 Welcome to the React Router Advanced App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/blogs">
                <span>&gt;&gt;&gt;</span>All Blogs
              </Link>
            </li>
            <li>
              <Link to="/blog/1">
                <span>&gt;&gt;&gt;</span>Sample Blog Post 1
              </Link>
            </li>
            <li>
              <Link to="/blog/2">
                <span>&gt;&gt;&gt;</span>Sample Blog Post 2
              </Link>
            </li>
            <li>
              <Link to="/user/1/posts/1">
                <span>&gt;&gt;&gt;</span>User 1's Post 1
              </Link>
            </li>
            <li>
              <Link to="/user/2/posts/3">
                <span>&gt;&gt;&gt;</span>User 2's Post 3
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span>&gt;&gt;&gt;</span>Profile
              </Link>
            </li>
            <li>
              <Link to="/profile/details">
                <span>&gt;&gt;&gt;</span>Profile Details
              </Link>
            </li>
            <li>
              <Link to="/profile/settings">
                <span>&gt;&gt;&gt;</span>Profile Settings
              </Link>
            </li>
          </ul>
        </nav>
        <p>Explore advanced routing techniques with React Router!</p>
        <p>Learn how to create dynamic and nested routes effortlessly.</p>
        <p>Click the links above to navigate through the app.</p>
      </div>
    </section>
  );
};

export default Home;
