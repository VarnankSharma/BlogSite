import React, { useState } from "react";
import { createPost } from "../api";
import "../index.css";

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(formData);
    alert("Post Created!");
    setFormData({ title: "", description: "" });
  };

  return (
    <div className="form-container">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
