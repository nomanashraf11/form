import React, { useState } from "react";
import Heart from "./Heart";

const Post = () => {
  const [color, setColor] = useState("grey");
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="flex flex-col w-[60vw] border-l-4 p-2 mt-10">
      <div className="flex justify-between items-center">
        <div className="w-70 flex justify-start items-center space-x-4">
          <img
            className="rounded-full w-12"
            src="https://dub2.discourse-cdn.com/figma/user_avatar/forum.figma.com/gleb/90/192_2.png"
            alt=""
          />
          <p className="text-lg font-bold">Jonas</p>
        </div>
        <p className="text-[grey]">21 aprl,22</p>
      </div>
      <div className="ml-12 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis
          architecto illo voluptates, possimus quae doloremque atque
          exercitationem omnis non dolores dolore? Sint sed eius aut ratione,
          non optio repellendus.s
        </p>
      </div>
      <div className="flex justify-start items-center space-x-5 mt-5 ml-12">
        <div
          className="cursor-pointer"
          onClick={() => {
            setColor((prev) => {
              if (prev === "red") {
                return "grey";
              }
              if (prev === "grey") {
                return "red";
              }
            });
          }}
        >
          <Heart fill={color} />
        </div>
        <img
          className="cursor-pointer"
          src="./assets/chat.svg"
          alt=""
          onClick={() => {
            setShowComment(!showComment);
          }}
        />
      </div>
      {showComment ? (
        <>
          <div className="w-100 px-12 py-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Comment
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="flex justify-end mr-12">
            <button className="ml-auto px-6 py-2 rounded-md shadow-lg text-[grey] text-[20px]">
              post
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
