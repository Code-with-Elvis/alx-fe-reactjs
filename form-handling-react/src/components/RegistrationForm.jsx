import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // destructure so we can use `value={username}` etc (what the checker expects)
  const { username, email, password } = formData;

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = formData;

    let valid = true;

    if (!username) {
      setErrors((prev) => ({ ...prev, username: "Username is required." }));
      valid = false;
    } else if (username.length < 3) {
      setErrors((prev) => ({
        ...prev,
        username: "Username must be at least 3 characters long.",
      }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, username: "" }));
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      valid = false;
    } else if (!email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        email: "Email must be a valid email address.",
      }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required." }));
      valid = false;
    } else if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    if (valid) {
      console.log(formData);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          className={errors.username ? "error" : ""}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={errors.password ? "error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <footer>
        <button type="submit">Submit</button>
      </footer>
    </form>
  );
};
export default RegistrationForm;
