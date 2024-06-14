import { Link } from "react-router-dom";
import useUtils from "../../../hooks/useUtils";

const Home = () => {
  useUtils("welcome to seacoast online banking");
  return (
    <>
      {/* Banner */}
      <div
        id="bannerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active item-1  ">
            <div className="carouselContent">
              <div>
                <h5 data-aos="fade-up" className="welcomeTxt-1 ">
                  Banking made easy, more secure &#38; more personal
                </h5>
                <div>
                  <Link to="/about" className="btn btn-primary">
                    learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item item-2  ">
            <div className="carouselContent">
              <div>
                <h5 data-aos="fade-down" className="welcomeTxt-2">
                  connecting to all your banking needs
                </h5>

                <div className="text-center">
                  <Link to="/sign-up" className="btn btn-primary">
                    get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Banner ends */}

      {/* section 1 */}
      <section className="in-section">
        <div className="container">
          <div className="in-section-title">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2
                  data-aos="zoom-in-up"
                  className="setFont"
                  data-fontsize={21}
                >
                  Presenting <span>products</span> and <span>services</span>{" "}
                  that are right for you
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-10">
              <div className="featureBox" data-aos="flip-left">
                <div className="featureIcon one">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="featureTitle">
                  <h3>Online Business</h3>
                </div>
                <div className="featureText">
                  <p>
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-10">
              <div className="featureBox" data-aos="flip-up">
                <div className="featureIcon two">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <div className="featureTitle">
                  <h3>Mobile Bank</h3>
                </div>
                <div className="featureText">
                  <p>Fast, safe and easy way to send money in minutes.**</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-10">
              <div className="featureBox" data-aos="flip-right">
                <div className="featureIcon three">
                  <i className="fa-sharp fa-solid fa-file-shield"></i>
                </div>
                <div className="featureTitle">
                  <h3>Safe and Secure</h3>
                </div>
                <div className="featureText">
                  <p>Keep Your Children Safe from Financial Fraud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 1 ends */}

      {/* section 2 */}
      <section
        className="in-section sectionTwo setBg row justify-content-center alignCenter"
        data-bg="/home/sectwo.webp"
      >
        <div className="row justify-content-center align-item-center">
          <div className="col-lg-6">
            <div className="sectoContent">
              <div className="sectwoImgBox" data-aos="zoom-in">
                <img src="/home/sail.png" alt="sail" />
              </div>
              <div className="sectwoTxtBox">
                <h2 className="text-center" data-aos="fade-up">
                  {" "}
                  When you bank with Seacoast,
                  <br /> you have options.
                </h2>
                <p data-aos="fade-down">
                  Life can get hectic, but that doesn't mean your banking has
                  to. At Seacoast, we make banking easy and convenient by
                  offering services that allow you to bank anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      {/* section 3 */}
      <section className="in-section">
        <div className="container">
          <div className="in-section-title">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2
                  data-aos="fade-in-up"
                  className="setFont"
                  data-fontsize={21}
                >
                  OUR <span>SERVICES</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-up">
                <div className="serviceIconBox">
                  <img src="/home/chart.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Investments</h2>
                  <p>Mindful Planning of Monetary Spending and Saving.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-right">
                <div className="serviceIconBox">
                  <img src="/home/signpost.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Superior Advice</h2>
                  <p>
                    Find all the support and information they need to make all
                    decisions about saving for your future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-left">
                <div className="serviceIconBox">
                  <img src="/home/wallet.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Household Savings</h2>
                  <p>We’re a group of professional money planners.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-up">
                <div className="serviceIconBox">
                  <img src="/home/briefcase.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Private Banking</h2>
                  <p>Banking more securely and privately</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-left">
                <div className="serviceIconBox">
                  <img src="/home/shield.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Insurance</h2>
                  <p>ROAD TO SUCCESS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-up-left">
                <div className="serviceIconBox">
                  <img src="/home/administration.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Legal Advice</h2>
                  <p>We Solve Your Financial Problem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}

      {/* section4 */}
      <section
        className="in-section sectionFour   setBg row justify-content-center alignCenter"
        data-bg="/home/banner4.jpg"
        data-aos="zoom-in"
      >
        <div className="col-lg-4 col-10">
          <div className="secivBox">
            <i className="fa-solid fa-globe"></i>
            <h4>Supported countries</h4>
            <p>54</p>
          </div>
        </div>
        <div className="col-lg-4 col-10">
          <div className="secivBox">
            <i className="fa-solid fa-globe"></i>
            <h4>RUNNING DAYS</h4>
            <p>20028</p>
          </div>
        </div>

        <div className="col-lg-4 col-10">
          <div className="secivBox">
            <i className="fa-solid fa-globe"></i>
            <h4>Users</h4>
            <p>54k+</p>
          </div>
        </div>
      </section>
      {/* section4  ends*/}
      {/* section five */}
      <section
        className="in-section sectionV setBg row justify-content-center alignCenter"
        data-bg="/home/in-profit-decor.svg"
      >
        <div className="col-lg-10 ">
          <div className="text-center" data-aos="fade-up">
            <h2 className="title mt-4 mb-1">
              LOWER <span>RATE</span>, FOR A <span>LONGER</span> PERIOD
            </h2>
            <i className="fas fa-chevron-down text-primary"></i>
          </div>
          <div
            data-aos="fade-up"
            className="row justify-content-center alignCenter mt-5"
          >
            <div className="col-lg-6">
              <h4 className="mb-4">
                0% Intro APR* On Purchases And Balance Transfers For 20 Billing
                Cycles.
              </h4>
              <p>
                A 0% APR credit card with an introductory offer on purchases,
                balance transfers or both can help you temporarily avoid
                interest charges and potentially save hundreds of dollars. On
                this page, you can compare the best 0% APR credit cards
                available from our partners and get expert advice on how to
                manage debt responsibly. Reach us to learn more about how it
                works.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section five ends  */}
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
            <Link to="/sign-up" className="btn btn-primary">
              Get started
            </Link>
          </div>
        </div>
      </section>
      {/* cta*/}
    </>
  );
};

export default Home;
