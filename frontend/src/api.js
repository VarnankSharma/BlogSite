import axios from "axios";

const API_URL = "https://blog-site-backend-nu.vercel.app/";

export const createPost = async (postData) => {
  return await axios.post(API_URL, postData);
};

export const fetchPosts = async () => {
  return await axios.get(API_URL);
};
