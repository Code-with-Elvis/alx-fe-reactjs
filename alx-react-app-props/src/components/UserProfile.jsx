import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const { name, email, age, bio } = useContext(UserContext);

  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
