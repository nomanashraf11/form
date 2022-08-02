import React from "react";
import Post from "../components/Post";

const Posts = () => {
  return (
    <div className="mt-10">
      {[2, 4, 2, 2, 1].map((el) => {
        return <Post />;
      })}
    </div>
  );
};

export default Posts;
