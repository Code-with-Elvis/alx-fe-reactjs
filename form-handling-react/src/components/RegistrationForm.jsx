import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [usernameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = formData;

    let valid = true;

    if (username.trim() === "") {
      setUserNameError("Username is required.");
      valid = false;
    } else if (username.length < 3) {
      setUserNameError("Username must be at least 3 characters long.");
      valid = false;
    } else {
      setUserNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Email must be a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
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
          onChange={handleChange}
          className={usernameError ? "error" : ""}
        />
        {usernameError && <p className="error">{usernameError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className={emailError ? "error" : ""}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          className={passwordError ? "error" : ""}
        />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>
      <footer>
        <button type="submit">Submit</button>
      </footer>
    </form>
  );
};
export default RegistrationForm;
