function Services() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="image-container" style={{ height: "300px" }}>
            <img
              src="http://www.drdanielclinic.com/landing/images/Hip-Replacement.jpg"
              alt=""
              className="img-fluid w-100 h-100"
            />
            {/* Text Overlay */}
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
        {/* Repeat for other images */}
        {/* ... */}
      </div>
    </div>
  );
}
export default Services;
