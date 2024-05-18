import Button from "./elements/Button";
import Biriyani from "../assets/images/biriyani.png";
const Banner = () => {
  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-md-6 p-3">
        <h2 className="mb-4 text-white font-weight-bold">
          Food Ordering Made Easy
        </h2>
        <p className="text-danger font-weight-semibold">Get Started Today!</p>

        <div className="d-flex gap-3">
          <Button className="btn btn-primary ">Order Now</Button>
          <a
            href="/menu"
            className="text-warning font-weight-bold text-decoration"
          >
            See Menu
          </a>
        </div>
      </div>

      <div className="col-md-6 p-3">
        <img
          src={Biriyani}
          alt="Mutton biryani banner"
          className="img-fluid me-2 rounded-circle"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Banner;
