import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123456") {
      localStorage.setItem("authToken", "fake-jwt-token");
      localStorage.setItem("user", JSON.stringify({ username, id: 1 }));

      // Redirect to profile page after successful login
      navigate("/profile");
    } else {
      setError("Invalid username or password. Try: admin/123456");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setError("");
    setUsername("");
    setPassword("");
    navigate("/login");
  };

  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem("authToken") !== null;

  if (isLoggedIn) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return (
      <section className="login-page">
        <div className="container">
          <header>
            <Link to="/">← Back to Home</Link>
          </header>
          <h1>Already Logged In</h1>
          <p className="p1">Welcome back, {user.username}!</p>
          <div className="button-group">
            <Link to="/profile">Go to Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="login-page">
      <div className="container">
        <header>
          {" "}
          <Link to="/">← Back to Home</Link>
        </header>
        <h1>Login</h1>
        <p className="p1">Please log in to access protected pages.</p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
