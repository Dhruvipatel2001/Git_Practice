import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handlesubmit}>
          <div className="input-container">
            <lable>Username</lable>
            <input
              type="text"
              value={username}
              name="username"
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <lable>Password</lable>
            <input
              type="password"
              value={password}
              name="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="button-container">
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
