import Link from "next/link";
import React from "react";

const Post = ({ title, body, id, userId }) => {
  return (
    <>
      <Link href={`/${id}`}>
        <div className="flex flex-col h-full m-4 w-72 p-3 border-2 rounded-xl  bg-white hover:shadow-lg 	">
          <h1 className="font-bold">{title}</h1>
          <p>{body}</p>
        </div>
      </Link>
    </>
  );
};

export default Post;
