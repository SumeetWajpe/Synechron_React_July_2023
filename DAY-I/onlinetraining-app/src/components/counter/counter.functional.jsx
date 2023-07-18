import React, { useState } from "react";

export default function Counter() {
  //   let [count, setCount] = useState(0); // state hook
  //   let [age, setAge] = useState(18); // state hook

  let [data, setData] = useState({ count: 0, age: 18 });
  return (
    <div>
      <p>Count : {data.count} </p>
      <button
        className="btn btn-primary"
        onClick={() => setData({ ...data, count: data.count + 1 })}
      >
        Count ++
      </button>
      <hr />
      <p>Age : {data.age}</p>
      <button
        className="btn btn-primary"
        onClick={() => setData({ ...data, age: data.age + 1 })}
      >
        Age ++
      </button>
    </div>
  );
}
