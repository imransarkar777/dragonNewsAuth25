import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            Login with your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                autoComplete="true"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                autoComplete="true"
                type="password"
                className="input"
                placeholder="Password"
              />
              {error.login && <label className="label text-sm text-red-600">{error.login}</label>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral rounded-none mt-4 w-full">
                Login
              </button>
            </fieldset>
            <p className="text-center">
              dont have an account?{" "}
              <Link className="text-red-400" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
