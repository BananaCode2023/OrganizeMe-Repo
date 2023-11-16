import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import "../css/register.css";
import signupHeroImg from "../assets/signup-hero-img.png";
import signupLogo from "../assets/newLogo.png";
import googleLogo from "../assets/google-logo.png";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, send the request
    axios
      .post("http://localhost:3333/auth/register", {
        username,
        email,
        password,
      })
      .then((result) => {
        navigate("/auth/login");
        console.log(result);
        toast.success("Thank you for signing up. Please Log-in");
      })
      .catch((err) => console.log(err));
  };

  const isValidEmail = (email) => {
    // You can add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <main className="signup-page">
        <div className="signup-col1">
          <Link to="/">
            <img src={signupLogo} alt="organizeMe-logo" id="login-logo" />
          </Link>
          <h2>Create an Account & Get Started</h2>

          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="&#x1f464; Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="&#9993; Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="password"
              name="password"
              id="password"
              placeholder="&#128273; Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <button type="submit" name="submit" className="btn btn-success">
              Sign Up
            </button>
          </form>

          <hr className="or-line" />
          <p className="or-text">
            <small>or sign up with</small>
          </p>

          <li className="signup-option">
            <img
              src={googleLogo}
              alt="google-logo"
              className="signup-option-btns"
            />
            Continue with Google
          </li>

          <small>
            <p>
              Already have an account? <Link to="/auth/login">Log in</Link>
            </p>
          </small>

          <p className="login-signup-footer">
            <small>© 2023 OrganizeMe All Rights Reserved</small>
          </p>
        </div>
        <div className="signup-col2">
          <h2>Welcome Aboard</h2>
          <p>
            Welcome to Organize Me! Get ready to unlock a world of
            possibilities. Your journey starts here.{" "}
          </p>
          <img src={signupHeroImg} alt="" />
        </div>
      </main>
    </>
  );
}

export default Register;
