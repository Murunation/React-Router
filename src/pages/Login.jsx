import React, { useState } from "react";
import "../styles/login.css";

export default function Login(prop) {
  const { LoginCheck } = prop;
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function loginHandler(e) {
    e.preventDefault();
    setUsername(e.target.userName.value);
    setPassword(e.target.password.value);
    LoginCheck(userName, password);
  }
  console.log("Pass: ", password);
  console.log("Username: ", userName);
  return (
    <div className="log">
      <form onSubmit={loginHandler}>
        <input type="text" name="userName" />
        <input type="text" name="password" />
        <button type="submit">Login</button>
        <input type="button" value="Register" />
      </form>
    </div>
  );
}
