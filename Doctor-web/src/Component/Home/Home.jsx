import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [showImage2, setShowImage2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage2(true);
    }, 3000); // Change image after 3 seconds
    return () => clearTimeout(timer);
  }, [setTimeout]);
  return (
    <div className="container-fluid px-0">
      <div className="row">
        {/* <div className="col-md-6 col-lg-5 col-xl-4 d-none d-md-block">
             isko kahli issliye chore hai taki kuch bad me likhna ho to asani se likh sake 
        </div> */}
        <div className="col-md-6 col-lg-7 col-xl-8">
          <aside className="position-relative overflow-hidden text-black rounded-lg p-5 sm:p-16"></aside>
        </div>
      </div>
      <div className="row">
        <div
          className="d-flex justify-content-center align-items-center vh-100 position-relative"
          onMouseEnter={() => setShowImage2(true)}
          onMouseLeave={() => setShowImage2(false)}
        >
          {/* Image 1 */}
          <img
            className="w-100 h-100 object-fit-cover"
            src="https://cdn.pixabay.com/photo/2021/10/10/08/24/doctor-6695949_1280.jpg"
            alt="image1"
          />
          {/* Image 2 */}
          {showImage2 && (
            <img
              className="w-100 h-100 object-fit-cover fade-in position-absolute top-0 left-0"
              src="https://cdn.pixabay.com/photo/2021/10/03/03/47/doctor-6676747_640.jpg"
              alt="image2"
            />
          )}
          {/* Card Overlay */}
          <div className="card-overlay card bg-light text-dark p-3 position-absolute bottom-0 left-50 translate-middle transform-translate-y-n-50">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              This is a paragraph inside the card overlaying the images.
            </p>
            <p className="card-text">
              Here is another paragraph for more information.
            </p>
          </div>
        </div>
      </div>{" "}
      <div>
        <h1 className="text-center text-2xl sm:text-5xl font-medium"></h1>
      </div>{" "}
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="p-5 bg-light rounded">
              <div class="text-center">
                <h1 class="text-2xl sm:text-5xl font-medium">
                  Welcome to our Clinic
                </h1>
              </div>
              <div>
                <p class="text-gray-700">
                  We walk closely with you through the health-related issues you
                  are facing, and take time to help you with the emotional side
                  of the process, as well as the physical. We understand that
                  facing health challenges can be overwhelming, and we're here
                  to provide support every step of the way. Our team of
                  experienced medical professionals will work with you to
                  develop a personalized treatment plan that meets your unique
                  needs. We'll also provide emotional support, helping you
                  navigate the ups and downs of your health journey.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 bg-light rounded">
              <div class="text-center">
                <h1 class="text-2xl sm:text-3xl font-medium mb-4 w-55 mx-auto bg-primary text-white">
                  MAKE AN APPOINTMENT
                </h1>
              </div>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="Your Phone"
                  />
                </div>
                <div class="form-group">
                  <input type="date" class="form-control" />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control row-10"
                    placeholder="Comment"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br /> {/* this is another section */}
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="p-5 bg-light rounded">
              <div class="text-center">
                <h1 class="text-2xl sm:text-5xl font-medium">
                  Welcome to our Clinic
                </h1>
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2021/10/03/03/47/doctor-6676747_640.jpg"
                  alt="image4"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 bg-light rounded">
              <div class="text-center">
                <h2 class="mb-4">Why choose us?</h2>
              </div>
              <div class="px-4">
                <p class="mb-3">
                  Experienced, compassionate, and extensively trained,
                  board-certified professionals
                </p>
                <p class="mb-3">
                  Our focus is on providing exceptional care to each and every
                  patient.
                </p>
                <p class="mb-3">
                  Don't let pain, mobility issues, and dysfunction diminish your
                  well-being.
                </p>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-syringe fa-fw mr-2"></i>
                    <p>
                      We are specialized in minimally-invasive surgeries, hip
                      replacement, Anterior cruciate ligament-arthroscopic
                      rotator cuff repair.
                    </p>
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-star fa-fw mr-2"></i>
                    <p>
                      Our objective is to relieve our patients' pain by
                      restoring functionality while improving their quality of
                      life.
                    </p>
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-heart fa-fw mr-2"></i>
                    <p>
                      Our mission is to provide comprehensive care with
                      integrity and compassion, working together to create a
                      unique treatment plan for our patient's wellbeing.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />{" "}
      <div className="text-center">
        <h1 className="text-2xl sm:text-5xl font-medium">Services</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="image-container" style={{ height: "300px" }}>
              <img
                src="http://www.drdanielclinic.com/landing/images/Hip-Replacement.jpg"
                alt=""
                className="img-fluid w-100 h-100"
              />
              <div className="image-overlay">
                <h3 className="text-center">Arthroplasty</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" style={{ height: "300px" }}>
              <img
                src="http://www.drdanielclinic.com/landing/images/Fracture.jpg"
                alt=""
                className="img-fluid w-100 h-100"
              />
              <div className="image-overlay">
                <h3 className="text-center">Fracture & Trauma</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" style={{ height: "300px" }}>
              <img
                src="http://www.drdanielclinic.com/landing/images/Arthroscopy.jpg"
                alt=""
                className="img-fluid w-100 h-100"
              />
              <div className="image-overlay">
                <h3 className="text-center">ARTHROSCOPY</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="image-container" style={{ height: "300px" }}>
              <img
                src="http://www.drdanielclinic.com/landing/images/img4.jpg"
                alt=""
                className="img-fluid w-100 h-100"
              />
              <div className="image-overlay">
                <h3 className="text-center">BACK PAIN</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" style={{ height: "300px" }}>
              <img
                src="http://www.drdanielclinic.com/landing/images/Arthritis.jpg"
                alt=""
                className="img-fluid w-100 h-100"
              />
              <div className="image-overlay">
                <h3 className="text-center">ARTHRITIS</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container" style={{ height: "300px" }}>
              <img
                src="http://www.drdanielclinic.com/landing/images/sportsinjury.jpg"
                alt=""
                className="img-fluid w-100 h-100"
              />
              <div className="image-overlay">
                <h3 className="text-center">SPORTS MEDICINE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
