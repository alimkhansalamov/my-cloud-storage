import React, { useState } from "react";
import "./Authorization.css";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="authorization">
      <div className="authorization__header">MCS Login</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Enter your email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter your password..."
      />

      <button
        className="authorization__btn"
        onClick={() => dispatch(login(email, password))}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
