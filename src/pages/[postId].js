import { useRouter } from "next/router";
import React from "react";

const PostDetails = ({ data }) => {
  const router = useRouter();
  const id = router.query.postId;
  const post = data.find((item) => item.id.toString() === id);

  return (
    <>
      <div className="m-8 flex flex-col justify-center w-4/12 p-4	mx-auto rounded-lg shadow-lg">
        <h1 className="font-extrabold	text-xl">Post: {id}</h1>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-extrabold	text-3xl">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
