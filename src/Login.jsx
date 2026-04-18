import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handlelogin() {
    navigate("/home");
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
      <br />

      <button onClick={handlelogin}>Login</button>
    </div>
  );
}

export default Login;