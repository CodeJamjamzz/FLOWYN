import { Fragment } from "react";
import logo from "../assets/flowyn-logo.png";
import AnimatedContent from "../types/AnimatedContent";
import FadeContent from "../types/FadeContent";
import { Link } from "react-router-dom";
import { Modal } from "./SignInModal";
import { useState } from "react";

export const Starter = () => {
  const [isOpen, setOpen] = useState(false);
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
                <button className="btn btn-soft btn-primary w-32" onClick={() => {setOpen(true)}}>
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
                  />
                  <label className="label text-lg text-green-500">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-soft btn-primary mt-3">
                    Login
                  </button>
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
        }}
      />
    </Fragment>
  );
};
