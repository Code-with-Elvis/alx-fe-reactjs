import UserContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import ProfilePage from "./ProfilePage";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    bio: "Frontend developer who loves clean UI and React.",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
