import { Link } from "react-router-dom";

const ProfileDetails = () => {
  return (
    <section className="profile-details">
      <div className="container">
        <h2>Profile Details</h2>

        <div>
          <h3>Personal Information</h3>
          <p>
            <strong>Full Name:</strong> Elvis Okumu
          </p>
          <p>
            <strong>Email:</strong> elvis.okumu@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Location:</strong> Nairobi, Kenya
          </p>
          <p>
            <strong>Bio:</strong> Passionate React developer with 5 years of
            experience in building modern web applications.
          </p>
          <p>
            <strong>Member Since:</strong> January 15, 2024
          </p>
          <p>
            <strong>Last Login:</strong> Today at 2:30 PM
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link to="/profile/settings">Edit Profile Settings →</Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
