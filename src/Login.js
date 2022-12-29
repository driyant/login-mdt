import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passowrdIsInvalid, setPasswordIsInvalid] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    if (
      password.includes("1") ||
      password.includes("2") ||
      password.includes("3") ||
      password.includes("4") ||
      password.includes("5") ||
      password.includes("6") ||
      password.includes("7") ||
      password.includes("8") ||
      password.includes("9") ||
      password.includes("0")
    ) {
      setPasswordIsInvalid(true);
      return;
    }
    const data = {
      email: email,
      password: password,
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (!resp.ok) {
          setEmailIsInvalid(true);
        } else {
          setEmailIsInvalid(false);
          setPasswordIsInvalid(false);
          return resp.json();
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/homepage");
      });
  };
  return (
    <>
      <form
        onSubmit={loginHandler}
        style={{
          marginTop: "1rem",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-around",
        }}
      >
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailIsInvalid && <p style={{ color: "red" }}>Email is invalid!</p>}
        </div>
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passowrdIsInvalid && (
            <p style={{ color: "red" }}>Password is invalid!</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
