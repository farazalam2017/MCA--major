import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext.js";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, SetError] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  /*   const loginUser = async (e) => {
    e.preventDefault();
    SetError("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        userData
      );
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (err) {
      SetError(err.response.data.message);
    }
  }; */
  const loginUser = async (e) => {
    e.preventDefault();
    // SetError("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        userData
      );
      if (response && response.data) {
        const user = response.data;
        setCurrentUser(user);
        navigate("/");
      } else {
        SetError("Invalid response from server");
      }
    } catch (err) {
      console.error(err); // Log the entire error object
      if (err.response && err.response.data && err.response.data.message) {
        SetError(err.response.data.message);
      } else {
        SetError("An error occurred while processing your request");
      }
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}

          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          {/*  <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          /> */}
          <input
            type="password"
            placeholder="Password"
            name="password" // Corrected name attribute
            value={userData.password}
            onChange={changeInputHandler}
          />

          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to="/register">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
