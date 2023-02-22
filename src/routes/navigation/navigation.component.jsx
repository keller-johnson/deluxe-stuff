import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src="eye.png" className="logo" />
        </Link>

        <div className="links-container">
          <Link className="nav-link" to="/about">
            About
          </Link>

          <a
            href="https://www.hunterogeneous.com/"
            className="nav-link"
            target="_blank"
          >
            <i className="fa-sharp fa-solid fa-store"></i>
          </a>

          <a
            href="https://www.instagram.com/hunterogeneous"
            target="_blank"
            className="nav-link"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://twitter.com/hunterogeneous"
            className="nav-link"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
