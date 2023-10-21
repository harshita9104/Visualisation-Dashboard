import "./login.scss";
import { useState } from "react";

const Login = () => {
  const handleForm = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div>
      <form>
        <span>username</span>
        <input type="text" name="username" onChange={handleForm}></input>
        <span>password </span>
        <input type="text" name="password" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Login;
