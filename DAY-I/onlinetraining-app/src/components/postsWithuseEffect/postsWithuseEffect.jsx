import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <ul className="list-group">
        {posts.map(p => (
          <li key={p.id} className="list-group-item">
            <Link to={"/postdetails/" + p.id}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//http://localhost:3000/postdetails/1