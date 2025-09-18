import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-12 mb-3">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
