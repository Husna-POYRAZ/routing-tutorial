import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

export default function Login() {
  const [user, updateUser] = useState("");
  const history = useHistory();

  // "log in" a user
  function handleLogin() {
    localStorage.setItem("user", user);
    history.push("/app");
  }

  // if user already "authenticated", redirect them to the app
  if (localStorage.getItem("user")) {
    alert(
      "You're already authenticated in localStorage and being redirected into the app."
    );
    return <Redirect to={"/app"} />;
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Log In</h1>
      <div>
        <label>User Name : </label>
        <input value={user} onChange={(e) => updateUser(e.target.value)} />
      </div>
      <div>
        <button
          disabled={!user}
          onClick={handleLogin}
          style={{ marginTop: 10, color: "black" }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
