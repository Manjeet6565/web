import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light border-top py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <Link
              to="/"
              className="d-flex align-items-center link-dark text-decoration-none mb-3"
            >
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                height="48"
                className="me-3"
              />
              <div>
                <span className="fs-4 d-block">Dr. Manoj</span>
              </div>
            </Link>
          </div>
          <div className="col-md-6 mb-4">
            <h5>Our Location</h5>
            <div className="embed-responsive embed-responsive-16by9 mb-3">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7572960157246!2d-122.08424968469147!3d37.421999979825814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e8f2d5bb1f%3A0x4e0a2d87bbf4ddc1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623259441937!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>Phone:</strong> 7563976375
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> 7500005674
              </li>
              <li className="mb-2">
                <strong>Email:</strong> abcd@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Arthroplasty</li>
              <li className="mb-2">Fracture & Trauma</li>
              <li className="mb-2">Arthroscopy</li>
              <li className="mb-2">Back Pain</li>
              <li className="mb-2">Arthritis</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <p className="mb-0">Senegal Street, Tyre - Lebanon</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="#" className="text-muted me-3">
              <FaFacebookF size={24} />
            </Link>
            <Link to="#" className="text-muted me-3">
              <FaTwitter size={24} />
            </Link>
            <Link to="#" className="text-muted me-3">
              <FaInstagram size={24} />
            </Link>
            <Link to="#" className="text-muted">
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
