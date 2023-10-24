const Footer = () => {
  return (
    <>
      {/* cta*/}
      <section
        className=" call-to-action   setBg   justify-content-center alignCenter"
        data-bg="/home/bottom.jpg"
      >
        <div className="ctaContent">
          <div className="inner-title" data-aos="fade-right">
            <h2>Experience a New Digital World.</h2>
            <p>Mobile banking application with new &amp; exciting features.</p>
          </div>
          <div data-aos="fade-left">
            <a href="#" className="btn btn-primary">
              Get started
            </a>
          </div>
        </div>
      </section>
      {/* cta*/}
      <footer id="homeFooter">
        <div className="row">
          <div className="col-lg-4">
            <div className="footerContent">
              <h2>Overview</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                unde quibusdam, accusantium neque odio at earum suscipit optio
                aliquid cum, iste eligendi quisquam quis quas deserunt fugiat,
                harum corrupti atque.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footerContent">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Personal Banking
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Business Banking
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Commercial Banking
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="newsLester">
              <h2>NEWSLETTER SIGNUP</h2>
              <div className="form-subscribe">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Subscribe Now"
                />
                <a className="submit" href="#">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
