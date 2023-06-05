import React, { useState, useEffect } from "react";

export default function Fetchdata() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        (response) => response.json(),
          console.log("data fetched")
      )
      .then((data) => setUser(data), console.log("data set"))
      .catch((err) => new Error("data not fetched"));
  }, []);
  return (
    <div>
      <h2>this is Fetchdata Component</h2>
      <h1>user list</h1>

      <ul>
        {user.map((data, index) => (
          <li key={index}>
            {data.id} {data.name}
          </li>
        ))}
        {/* {user.id} */}
      </ul>
    </div>
  );
}
