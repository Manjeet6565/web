import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userEmail, password });
    // You can add more actions here, like API call to login
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={userEmail}
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group text-right">
                  <Link to="/forgot-password" className="text-primary">
                    Forgot Password?
                  </Link>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
                <div className="form-group text-right">
                  <Link to="/register" className="text-primary">
                    New Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
