import { Link, NavLink, Routes, Route, useNavigate } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="profile-page">
      <div className="container">
        <header>
          <Link to="/">← Back to Home</Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </header>
        <h1>User Profile</h1>
        <p>Welcome to your profile page!</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/profile/details">View Profile Details</NavLink>
            </li>
            <li>
              <NavLink to="/profile/settings">Profile Settings</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Internal routing for profile sub-sections */}
      <div>
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
