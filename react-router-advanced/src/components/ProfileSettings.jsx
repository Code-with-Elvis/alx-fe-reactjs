import { Link } from "react-router-dom";

const ProfileSettings = () => {
  return (
    <section className="profile-settings">
      <div className="container">
        <h2>Profile Settings</h2>
        <form>
          <div className="form-group">
            <label>Display Name</label>
            <input type="text" defaultValue="Elvis Okumu" />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" defaultValue="elvis.okumu@example.com" />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea defaultValue="Passionate React developer with 5 years of experience in building modern web applications." />
          </div>

          <div className="form-group checkbox-group">
            <label>Email notifications</label>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="form-group checkbox-group">
            <label>Marketing emails</label>
            <input type="checkbox" />
          </div>

          <button>Save Settings</button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <Link to="/profile/details">View Profile Details →</Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
