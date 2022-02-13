import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { login } from "../../utils/apiCalls";
import { request } from "../../utils/requestMethods";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    // login(dispatch, { email, password });
    request
      .post(
        "/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const {
          data: { user },
        } = res;
        dispatch(loginSuccess(user));
        console.log("user", user);
      })
      .catch((err) => {
        console.log("err login", err);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ padding: 10, width: 100 }} onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

export default Login;
