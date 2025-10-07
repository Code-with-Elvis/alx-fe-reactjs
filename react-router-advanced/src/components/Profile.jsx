import { Link, NavLink, Outlet } from "react-router-dom";

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
      </div>
      {/* Outlet renders the nested route components */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
