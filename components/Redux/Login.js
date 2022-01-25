import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "zinx", age: 23, email: "aaihnfala@gmail.copm" })
          );
        }}
      >
        login
      </button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};

export default Login;
