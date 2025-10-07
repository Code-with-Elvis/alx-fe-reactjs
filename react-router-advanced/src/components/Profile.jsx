import { Link, NavLink, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="container">
        <header>
          <Link to="/">← Back to Home</Link>
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

        <div>
          <h3>Quick Profile Overview</h3>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Member since: January 2024</p>
        </div>
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
