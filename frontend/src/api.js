import axios from "axios";

const API_URL = "https://blog-site-sc6u.vercel.app/api/post";

export const createPost = async (postData) => {
  return await axios.post(API_URL, postData);
};

export const fetchPosts = async () => {
  return await axios.get(API_URL);
};
