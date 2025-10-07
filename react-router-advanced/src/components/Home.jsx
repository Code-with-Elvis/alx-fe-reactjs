import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./ProtectedRoute";

const Home = () => {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();
  const user = authenticated
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <section className="home">
      <div className="container">
        <header>
          <h1 className="">Welcome to the React Router Advanced App</h1>
          <div>
            {authenticated ? (
              <div className="button-group">
                <span>Welcome, {user.username}!</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to="/login" className="login-link">
                Login
              </Link>
            )}
          </div>
        </header>

        <nav>
          <h3>Public Routes:</h3>
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
          </ul>

          <h3>
            Protected Routes{" "}
            {!authenticated && (
              <span style={{ color: "orange" }}>(Requires Login)</span>
            )}
            :
          </h3>
          <ul>
            <li>
              <Link to="/profile">
                <span>&gt;&gt;&gt;</span>Profile{" "}
                {!authenticated && <span style={{ color: "orange" }}>🔒</span>}
              </Link>
            </li>
            <li>
              <Link to="/profile/details">
                <span>&gt;&gt;&gt;</span>Profile Details{" "}
                {!authenticated && <span style={{ color: "orange" }}>🔒</span>}
              </Link>
            </li>
            <li>
              <Link to="/profile/settings">
                <span>&gt;&gt;&gt;</span>Profile Settings{" "}
                {!authenticated && <span style={{ color: "orange" }}>🔒</span>}
              </Link>
            </li>
          </ul>
        </nav>

        <p>Explore advanced routing techniques with React Router!</p>
        <p>Learn how to create dynamic and nested routes effortlessly.</p>
        <p>
          <strong>New:</strong> Experience protected routes that require
          authentication!
        </p>
      </div>
    </section>
  );
};

export default Home;
