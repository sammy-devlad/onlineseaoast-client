import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { closeLinks, toggleMobileNav } from "../utils";
const Nav = () => {
  useEffect(() => {
    closeLinks();
    return () => {};
  }, []);

  return (
    <>
      {/* Header */}
      <header id="homeHeader">
        <div id="topHeader">
          <ul className="supportSec unstyled">
            <li className="contactUs ">
              <Link to="/contact">contact us</Link>
            </li>
            <li className="faqs">
              <NavLink to="/faqs">faqs</NavLink>
            </li>
          </ul>
          <ul className="navSec unstyled">
            <li data-aos="fade-left" data-aos-delay="100">
              <NavLink to="/about">about</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="200">
              <NavLink to="/business-banking">business banking</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              <NavLink to="personal-banking">personal banking</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              <NavLink to="/structured-solution">structured solution</NavLink>
            </li>
            {/* <li data-aos="fade-left" data-aos-delay="500">
              <a href="#">knowledge center </a>
            </li> */}
            <li data-aos="fade-left" data-aos-delay="500">
              <NavLink to="/specialist-banking">specialist banking</NavLink>
            </li>
          </ul>
        </div>
        <div id="topHeaderTwo">
          <ul className="unstyled">
            <li className="logo">
              <Link to="/">
                <img src="/home/logo.png" alt="Logo" />
              </Link>
            </li>
            <li className="mobNav">
              <button type="button" onClick={() => toggleMobileNav()}>
                <i className="fa-solid fa-bars" id="toggleIcon"></i>
              </button>
            </li>
            <li className="auth">
              <Link to="/sign-in" className="  ">
                <i className="fa-solid fa-user"></i> Sign in{" "}
              </Link>
            </li>
          </ul>
        </div>
        <ul className="mobileNav unstyled" id="mobileNav">
          <li data-aos="fade-left" data-aos-delay="100">
            <NavLink to="/about">about</NavLink>
          </li>
          <li data-aos="fade-left" data-aos-delay="200">
            <NavLink to="/business-banking">business banking</NavLink>
          </li>
          <li data-aos="fade-left" data-aos-delay="300">
            <NavLink to="personal-banking">personal banking</NavLink>
          </li>
          <li data-aos="fade-left" data-aos-delay="400">
            <NavLink to="/structured-solution">structured solution</NavLink>
          </li>
          {/* <li data-aos="fade-left" data-aos-delay="500">
            <a href="#">knowledge center</a>
          </li> */}
          <li data-aos="fade-left" data-aos-delay="500">
            <NavLink to="/specialist-banking">specialist banking</NavLink>
          </li>
        </ul>
      </header>
      {/* Header ends */}
    </>
  );
};

export default Nav;
