import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./Containers/Posts";
import Rapper from "./Containers/Rapper";

function App() {
  const [newPost, showNewPost] = useState(true);
  return (
    <div
      className={newPost ? "z-1 blur-md max-w-[2000px]" : "max-w-[2000px]  "}
      onClick={() => {
        showNewPost(false);
      }}
    >
      <Rapper>
        <div className="flex justify-center items-center space-x-10 mt-8">
          <img className="w-52" src="./assets/posts.svg" alt="" />
          <button
            className="px-6 py-2 rounded-md shadow-lg text-[grey] text-[20px] "
            onClick={(e) => {
              e.stopPropagation();
              showNewPost(true);
            }}
          >
            Create A Post
          </button>
        </div>
        <Posts />
        {newPost ? <CreatePost setModal={showNewPost} /> : ""}
      </Rapper>
    </div>
  );
}

export default App;
