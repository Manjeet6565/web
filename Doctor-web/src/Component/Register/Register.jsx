import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [userName, setUser] = useState("");
  const [userEmail, setEamil] = useState("");
  const [phone, setPhone] = useState("");
  const [sowelcome, setWelcome] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userName, userEmail, phone });
    setWelcome(true);
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register here</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={userEmail}
                    placeholder="Your Email"
                    onChange={(e) => setEamil(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    value={phone}
                    placeholder="Your phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </form>

              {sowelcome && (
                <div className="mt-4 alert alert-success">Welcome!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
