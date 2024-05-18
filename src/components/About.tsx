import AboutImage from "../assets/images/aboutImage.jpeg";

const About = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex bg-black flex-column justify-content-end">
      <div className="bg-dark p-3">
        <div className="row ">
          <div className="col-lg-5 col-md-1 text-white">
            <h2>About Us</h2>
            <p>
              We are a company dedicated to providing top-notch services and
              products to our customers. Our mission is to deliver value and
              quality in everything we do.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src={AboutImage}
              alt="Our Team"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
