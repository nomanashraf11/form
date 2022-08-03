import React, { useState } from "react";
import Swal from "sweetalert2";
import { getData, newForum } from "../api/requests";

const CreatePost = (props) => {
  const { setModal } = props;
  const { data, setData } = props;
  const [comment, setComment] = useState();
  console.log(comment);
  return (
    <div
      className="z-999 absolute top-52 right-90 w-[60rem] shadow-lg rounded-md bg-white "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="w-100 px-12 py-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          POST
        </label>
        <textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          name="comment"
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
          placeholder="Your Content..."
        ></textarea>
      </div>
      <div className="flex justify-end mr-12">
        <button
          className=" px-6 py-2 rounded-md shadow-lg text-[grey] text-[20px] mb-14"
          onClick={async () => {
            await newForum(comment);
            const { data } = await getData();
            setData(data.data);
            Swal.fire({
              title: "POST",
              icon: "success",
              timer: 2000,
              confirmButtonText: "Close",
            });
            setModal(false);
          }}
        >
          post
        </button>
        <button
          className="text-[red] px-6 py-2 rounded-md shadow-lg text-[grey] text-[20px] mb-14"
          onClick={() => {
            setModal(false);
          }}
        >
          CLose
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
