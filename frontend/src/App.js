import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import ListPosts from "./pages/ListPosts";
import "./index.css"; // Import CSS

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Create Post</Link>
        <Link to="/posts">View Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/posts" element={<ListPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
