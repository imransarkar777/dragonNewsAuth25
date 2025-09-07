import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero bg-base-200 justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            Login with your account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral rounded-none mt-4 w-full">Login</button>
            </fieldset>
            <p className="text-center">dont have an account? <Link className="text-red-400" to="/auth/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
