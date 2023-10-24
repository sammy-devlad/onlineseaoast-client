import { Link } from "react-router-dom";
import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const Faqs = () => {
  useUtils("Frequenty ask questions");
  return (
    <>
      {/* hero section  */}
      <Hero title="Faqs" currentPage="faqs" image="/home/abouthero.jpg" />
      {/* hero section ends  */}
      <section className="in-section about">
        <div className="container">
          <h3>
            <span> Questions</span> AND ANSWERS
          </h3>
          <div className="faq-content">
            <div className="el-f"></div>
            <div className="faq-block">
              <h2 className="faq-block__title">Basic questions</h2>
              <div className="accordion accordion-faq">
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq1"
                  >
                    How do I order checks?
                  </a>

                  <div className="question-block collapse" id="faq1">
                    <p>
                      Order My Checks portal with the OnlineSeacoast Bank
                      routing number 067005158.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq2"
                  >
                    My purse/wallet was stolen! What should I do?
                  </a>

                  <div className="question-block collapse" id="faq2">
                    <p>
                      Contact{" "}
                      <a href="mailto:support@onlineseacoastacct.net">
                        support@onlineseacoastacct.net
                      </a>{" "}
                      or visit any branch for assistance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq3"
                  >
                    I can’t find my checkbook! What should I do?
                  </a>

                  <div className="question-block collapse" id="faq3">
                    <p>
                      Contact{" "}
                      <a href="mailto:support@onlineseacoastacct.net">
                        support@onlineseacoastacct.net
                      </a>{" "}
                      or visit any branch for assistance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq4"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq4"
                  >
                    I discovered fraudulent activities on my account. How can I
                    file a dispute?
                  </a>

                  <div className="question-block collapse" id="faq4">
                    <p>
                      If you've discovered fraudulent activities on your
                      account, you may Contact{" "}
                      <a href="mailto:support@onlineseacoastacct.net">
                        support@onlineseacoastacct.net
                      </a>{" "}
                      or visit any branch for assistance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq35"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq35"
                  >
                    My debit card is missing! What should I do?
                  </a>

                  <div className="question-block collapse" id="faq35">
                    <p>
                      Contact{" "}
                      <a href="mailto:support@onlineseacoastacct.net">
                        support@onlineseacoastacct.net
                      </a>{" "}
                      or visit any branch for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Faqs;
