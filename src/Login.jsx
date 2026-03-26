import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handlelogin() {
    if (username === "Chinthan" && password === "9999") {
      console.log("Login Successful");
      navigate("/home");
    } else {
      console.log("Login Failed");
      alert("Wrong Username or Password");
      
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <input
        type="Text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />


      <br />

      <input
        type="Password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handlelogin}>Login</button>
    </div>
  );
}

export default Login;