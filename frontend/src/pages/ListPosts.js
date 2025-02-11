import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import "../index.css";

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="post-container">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <small>{new Date(post.date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default ListPosts;
