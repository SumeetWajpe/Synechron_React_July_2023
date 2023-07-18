import React, { useEffect, useState } from "react";

export default function Posts() {
  let [posts, setPosts] = useState([]);
  // Equivalent of componentDidMount + componentDidUpdate
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(postsResponse => setPosts(postsResponse));
  }, []);
  return (
    <div>
      <header>
        <h1>Posts</h1>
      </header>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
