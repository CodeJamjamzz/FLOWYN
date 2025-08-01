import { Fragment } from "react";
import logo from "../assets/flowyn-logo.png";
import AnimatedContent from "../types/AnimatedContent";
import FadeContent from "../types/FadeContent";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./SignInModal";
import { useState } from "react";
import axios from "axios";
import { useProfile } from "../store/useProfile";
interface Props {
  setLogin: (value: boolean) => void;
}

export const Starter = ({ setLogin }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("Developer");
  const [signInError, setSignInError] = useState("");

  const setProfileUsername = useProfile((state) => state.setUsername);
  const setProfileEmail = useProfile((state) => state.setEmail);
  const setProfileUserType = useProfile((state) => state.setUserType);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      setError("All fields are required");
      return;
    }

    axios
      .post(
        "http://localhost:3000/api/login",
        { email: loginEmail, password: loginPassword },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.isLoggedIn) {
          setLogin(true);
          setProfileUsername(res.data.username);
          setProfileEmail(res.data.email);
          setProfileUserType(res.data.userType);
          navigate("/Landing", { replace: true });
        } else {
          console.log("Login failed");
          setError(res.data.message || "Login failed. Please try again.");
        }
      })
      .catch((err) => {
        setError(err.message || "Login failed. Please try again.");
      });
  };

  const handleSignIn = () => {
    if (
      !signInEmail ||
      !signInPassword ||
      !username ||
      !confirmPassword ||
      !userType
    ) {
      setSignInError("All fields are required");
      return;
    }

    if (signInPassword !== confirmPassword) {
      setSignInError("Passwords do not match");
      return;
    }

    const usertype: boolean = userType === "Developer";
    axios
      .post("http://localhost:3000/api/signin", {
        username: username,
        userType: usertype,
        email: signInEmail,
        password: signInPassword,
      })
      .then((res) => {
        if (res.data.isLoggedIn) {
          setLogin(true);
          setProfileUsername(res.data.username);
          setProfileEmail(res.data.email);
          setProfileUserType(res.data.userType);
          navigate("/Landing", { replace: true });
        } else {
          console.log("Sign In failed");
          setSignInError(
            res.data.message || "Sign In failed. Please try again."
          );
        }
      });
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-300">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <img src={logo} alt="Flowyn Logo" className="w-28 mb-2 mt-4" />
        </AnimatedContent>

        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto">
          <div className="text-center lg:text-left w-full lg:w-2/3">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div className="text-5xl font-bold">
                  Welcome to{" "}
                  <span className="text-5xl font-bold text-green-600">
                    FLOWYN!
                  </span>
                </div>
              </AnimatedContent>
            </div>

            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <p className="py-4 text-2xl text-justify">
                Flowyn is a simple and smart client management app designed to
                help you stay organized and connected. It lets you manage your
                clients, track interactions, and keep everything in one place.
                With a clean and user-friendly interface, Flowyn makes handling
                your work easier and faster. Whether you're a freelancer or a
                growing business, Flowyn helps you focus on what matters most —
                building strong client relationships.
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  className="btn btn-soft btn-primary w-32"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Sign Up
                </button>
                <Link to="/About" className="btn btn-outline btn-primary w-32">
                  About
                </Link>
              </div>
            </FadeContent>
          </div>

          <div className="card bg-base-100 w-full max-w-xs shrink-0 shadow-2xl mt-8 lg:mt-0">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="card-body">
                <h1 className="text-xl font-bold text-center">Login</h1>
                <fieldset className="fieldset">
                  <label className="label text-lg text-green-500">Email</label>
                  <input
                    type="email"
                    className="input mb-2"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label className="label text-lg text-green-500">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button
                    className="btn btn-soft btn-primary mt-3"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Login
                  </button>
                  <p
                    className={
                      error
                        ? `text-error text-center mt-3`
                        : `text-error text-center mt-3 hidden`
                    }
                  >
                    {error}
                  </p>
                </fieldset>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          setUsername("");
          setSignInEmail("");
          setSignInPassword("");
          setConfirmPassword("");
          setUserType("Developer");
          setSignInError("");
        }}
        onSubmit={handleSignIn}
        setEmail={setSignInEmail}
        setPassword={setSignInPassword}
        setUsername={setUsername}
        setConfirmPassword={setConfirmPassword}
        email={signInEmail}
        username={username}
        confirmPassword={confirmPassword}
        password={signInPassword}
        setUserType={setUserType}
        error={signInError}
      />
    </Fragment>
  );
};
