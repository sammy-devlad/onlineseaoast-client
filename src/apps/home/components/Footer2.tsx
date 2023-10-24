import { NavLink } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
      <footer className="footer footer-main">
        <div className="marque-line-wrap footer-marque"></div>
        <div className="footer-content ">
          <div className="container ">
            <nav className="footer-menu ">
              <ul>
                <li className="">
                  <NavLink to="/">
                    <i className="mm-icon mm1--icon "></i>Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <i className="mm-icon mm1--icon "></i>About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business-banking">
                    <i className="mm-icon mm1--icon "></i>business banking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="personal-banking">
                    <i className="mm-icon mm1--icon "></i>personal banking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/structured-solution">
                    <i className="mm-icon mm1--icon "></i>structured solution
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/specialist-banking">
                    <i className="mm-icon mm1--icon "></i>specialist bankin
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="footer-bottom ">
              <div className="row ">
                <div className="col-md-4 order-md-2 ">
                  <div className="logo-wrap ">
                    <div
                      className="  d-flex align-items-center justify-content-"
                      style={{
                        height: "40px",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "800",
                        letterSpacing: ".05rem",
                        marginLeft: "-19px",
                      }}
                    >
                      <img
                        src="/home/logo.png"
                        style={{
                          border: "0px",
                          width: "245px",
                          height: "69px",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 order-md-3 ">
                  <div className="social-button-wrap ">
                    <span className="social-button-title ">
                      We are in socials:
                    </span>
                    <div className="social-button footer--social ">
                      <ul>
                        <li>
                          <a href="https://twitter.com " target="_blank ">
                            <i className="fab fa-twitter "></i>
                          </a>
                        </li>
                        <li>
                          <a href="# " target="_blank ">
                            <i className="fab fa-skype "></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com " target="_blank ">
                            <i className="fab fa-facebook-f "></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/ " target="_blank ">
                            <i className="fab fa-telegram-plane "></i>
                            <span>Chat</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/ " target="_blank ">
                            <i className="fab fa-telegram-plane "></i>
                            <span>Group</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 order-md-1 ">
                  <div className="copyright ">
                    Copyright onlineseacoast
                    <br />
                    All rights reserved © 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
