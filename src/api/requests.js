import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getData = () => axios.get("http://localhost:4000/forum", config);
export const newForum = (review) =>
  axios.post("http://localhost:4000/forum", { review }, config);
