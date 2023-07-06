
import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const auth = getAuth();
  const onInput = (event) => {
    let data = { [event.target.name]: event.target.value };
    setLoginData({ ...loginData, ...data });
  };
  let navigate = useNavigate();
  const login = () => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((response) => {
        localStorage.setItem("userEmail", response.user.email);
        toast.success("You are now Successfully Logged In..");
        setTimeout(() => {
          navigate("/home");
        }, 200);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="register-main">
      <ToastContainer />
      <h1>Welcome to Password Manager</h1>
      <div className="intro">
        Securely store and manage all your passwords with ease at a single place
      </div>

      <div className="card-main">
        <div className="login-heading"> 
          <h2>Login</h2>
        </div>
        <div className="inputs-container">
          <input
            placeholder="Enter your Email"
            className="input-fields"
            onChange={onInput}
            type="email"
            name="email"
          />
          <input
            placeholder="Enter your Password"
            className="input-fields"
            onChange={onInput}
            name="password"
            type={"password"}
          />
          <button className="input-btn" onClick={login}>
            Login
          </button>

          <div className="no account"> Don't have an account? </div>
          <button className="signup-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
