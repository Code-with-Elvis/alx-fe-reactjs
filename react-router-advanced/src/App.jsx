import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Blog routes - dynamic routing for user-generated content */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Dynamic user blog post routes */}
          <Route path="/user/:userId/posts/:postId" element={<BlogPost />} />

          {/* Profile routes with nested routing */}
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Catch-all route for 404 */}
          <Route
            path="*"
            element={
              <div>
                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
