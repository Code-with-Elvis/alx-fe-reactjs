import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Blog routes - dynamic routing for user-generated content */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Dynamic user blog post routes */}
          <Route path="/user/:userId/posts/:postId" element={<BlogPost />} />

          {/* Protected Profile routes with nested routing */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

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
