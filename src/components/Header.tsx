import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            className="img-fluid me-2"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "red" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link
                to="/"
                className="nav-link text-white text-decoration-none fs-4"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="#"
                className="nav-link text-white text-decoration-none fs-4"
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/cart"
                className="nav-link text-white text-decoration-none fs-4"
              >
                Cart
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/login"
                className="nav-link text-white text-decoration-none fs-4"
              >
                Log In
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/signup"
                className="nav-link text-white text-decoration-none fs-4"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
