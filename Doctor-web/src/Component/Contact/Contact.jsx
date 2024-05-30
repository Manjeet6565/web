import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDiceFive } from "react-icons/fa";

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2>Contact Info</h2>
          <ul className="list-unstyled">
            <li className="mb-2">
              <p>
                <strong>Phone:</strong> 7563976375
              </p>
            </li>
            <li className="mb-2">
              <p>
                <strong>Phone:</strong> 7500005674
              </p>
            </li>
            <li className="mb-2">
              <p>
                <strong>Email:</strong> abcd@gmail.com
              </p>
            </li>
            <li className="mb-2">
              <p>
                <strong>Address:</strong> 123 Main Street, Tyre, Lebanon
              </p>
            </li>
            <li className="mb-2">
              <p>
                <strong>Office Hours:</strong> Mon - Fri, 9 AM - 6 PM
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <h2>Our Services</h2>
          <ul className="list-unstyled">
            <li className="mb-2">
              <p>
                <FaDiceFive /> <strong>Service 1</strong> - We offer
                comprehensive consulting services to help businesses optimize
                their operations and achieve their strategic goals.
              </p>
            </li>
            <li className="mb-2">
              <p>
                <FaDiceFive /> <strong>Service 2</strong> - Our expert team
                provides top-notch software development solutions tailored to
                your specific needs and requirements.
              </p>
            </li>
            <li className="mb-2">
              <p>
                <FaDiceFive /> <strong>Service 3</strong> - We deliver
                high-quality digital marketing services to enhance your online
                presence and drive traffic to your website.
              </p>
            </li>
            <li className="mb-2">
              <p>
                <FaDiceFive /> <strong>Service 4</strong> - Our training
                programs are designed to equip your team with the latest skills
                and knowledge in various domains.
              </p>
            </li>
            <li className="mb-2">
              <p>
                <FaDiceFive /> <strong>Service 5</strong> - We provide
                exceptional customer support services to ensure your clients
                receive the best experience possible.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2>Our Location</h2>
          <div className="embed-responsive embed-responsive-16by9">
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
        <div className="col-md-6 mb-4">
          <h2>Our Office</h2>
          <img
            src="https://media.gettyimages.com/id/182172165/photo/hospital-emergency-entrance.jpg?s=612x612&w=0&k=20&c=jz0D5ISZjMeUCZRswvnCbc3dto7dnmvK254dALbxHA0="
            className="img-fluid"
            alt="Office"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
