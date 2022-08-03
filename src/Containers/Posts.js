import axios from "axios";
import React, { useEffect, useState } from "react";
import { getData } from "../api/requests";
import Post from "../components/Post";

const Posts = (props) => {
  const { data, setData } = props;
  useEffect(() => {
    const forums = async () => {
      const { data } = await getData();
      setData(data.data);
    };
    forums();
  }, []);

  return (
    <div className="mt-10">
      {data.map((el) => {
        return <Post key={el.id} description={el.review} id={el.id} />;
      })}
    </div>
  );
};

export default Posts;
