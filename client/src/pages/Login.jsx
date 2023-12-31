import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";
import loginHeroImg from "../assets/login-hero-img.png";
import loginLogo from "../assets/newLogo.png";
import googleLogo from "../assets/google-logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:3333/auth/login", { email, password })
        .then((result) => {
          window.localStorage.setItem("id", result.data.id);
          navigate("/inbox");
          console.log(result);
          toast.success("Successfully Logged-In");
        })
        .catch((err) => {
          toast.error("wrong email or password please input correct details");
          console.log(err);
        });
    }
  };

  return (
    <>
      <main className="login-page">
        <div className="login-col1">
          <h2>Welcome Organizers</h2>
          <p>
            Get a chance to explore the best to-do list app. Unlock your
            productivity potential with OrganizeMe
          </p>
          <img src={loginHeroImg} alt="" />
        </div>

        <div className="login-col2">
          <Link to="/">
            <img src={loginLogo} alt="organizeMe-logo" id="login-logo" />
          </Link>
          <h2>Login to your Account</h2>
          <p className="login-heading-text">
            Welcome back! Select method to log in:
          </p>

          <li className="login-option">
            <img
              src={googleLogo}
              alt="google-logo"
              className="login-option-btns"
            />
            Continue with Google
          </li>

          <hr className="or-line" />
          <p className="or-text">
            <small>or continue with email</small>
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="&#9993; Email"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}

            <input
              type="password"
              name="password"
              id="password"
              placeholder="&#128273; Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}

            <div className="remember-me">
              <input type="checkbox" name="remember-me-checkbox" />
              <label htmlFor="remember-me-checkbox">
                <small>Remember Me</small>
              </label>
            </div>

            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>

          <small>
            <p>
              Don't have an account? <Link to="/auth/register">Sign-up now!</Link>
            </p>
          </small>

          <p className="login-signup-footer">
            <small>© 2023 OrganizeMe All Rights Reserved</small>
          </p>
        </div>
      </main>
    </>
  );
}

export default Login;
