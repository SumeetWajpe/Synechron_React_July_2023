import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  let [post, setPost] = useState({});
  let { pid } = useParams(); // read the parameters from the url (routing parameters)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + pid)
      .then(res => res.json())
      .then(postResponse => setPost(postResponse));
  }, []);
  return (
    <div>
      <h1>Post Details for {pid}</h1>
      {post?.title ? (
        <div>
          <h2>Title :{post.title}</h2>
          <h3>Body :{post.body}</h3>
          <h3>Id:{post.id}</h3>
          <h3>UserId: {post.userId}</h3>
        </div>
      ) : (
        "Loading.."
      )}
    </div>
  );
}
