import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const Contact = () => {
  useUtils("We're Here to Help ");
  return (
    <>
      {/* hero section  */}
      <Hero
        title="Welcome To Our Customer Service"
        currentPage="contact us"
        image="/home/abouthero.jpg"
      />
      {/* hero section ends  */}
      <section className="in-section about">
        <div className="container">
          <h3 className="section-title">
            <span>Company</span> Contacts
          </h3>

          <div className="contacts-content">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="contacts-support">
                  <div
                    className="contacts-support__item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="contacts-support__icon skype--icon"></i>
                    <div className="contacts-support__title">Skype</div>
                    <div className="contacts-support__value">
                      <a href="#" target="_blank">
                        onlineseacoast
                      </a>
                    </div>
                  </div>
                  <div
                    className="contacts-support__item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="contacts-support__icon telegram--icon"></i>
                    <div className="contacts-support__title">Telegram Chat</div>
                    <div className="contacts-support__value">
                      <a href="#" target="_blank">
                        onlineseacoast
                      </a>
                    </div>
                  </div>
                  <div
                    className="contacts-support__item"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="contacts-support__icon telegram--icon"></i>
                    <div className="contacts-support__title">
                      Telegram Group
                    </div>
                    <div className="contacts-support__value">
                      <a href="#" target="_blank">
                        onlineseacoast
                      </a>
                    </div>
                  </div>
                  <div
                    className="contacts-support__item text-truncate"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <i className="contacts-support__icon sp--icon"></i>
                    <div className="contacts-support__title">Support</div>
                    <div className="contacts-support__value text-truncate">
                      <a
                        href="mailto:support@onlineseacoastacct.net"
                        target="_blank"
                      >
                        support@onlineseacoastacct.net
                      </a>
                    </div>
                  </div>
                  <div
                    className="contacts-support__item"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <i className="contacts-support__icon local--icon"></i>
                    <div className="contacts-support__title">Address</div>
                    <div className="contacts-support__value">
                      123 Disney Street Slim Av. Brooklyn Bridge, NY, New York{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="map" data-aos="fade-up">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.330812678327!2d152.997613114675!3d-27.39660708292162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915793aff0db2b%3A0xa3f3618a60ac1ec9!2sDisney%20St%2C%20Stafford%20Heights%20QLD%204053%2C%20Australia!5e0!3m2!1sen!2sro!4v1665836904782!5m2!1sen!2sro"></iframe>
                </div>
              </div>
              <div className="col-xl-4">
                <form method="get" name="mainform" className="form-contacts">
                  <input type="hidden" name="form_id" value="16515944977263" />
                  <input
                    type="hidden"
                    name="form_token"
                    value="0e8d55da3b21db62b9b6b376ca28d34e"
                  />
                  <input type="hidden" name="a" value="support" />
                  <input type="hidden" name="action" value="send" />

                  <div className="form-contacts__title">Send message</div>
                  <div className="form-item">
                    <div className="label-title">Your name</div>
                    <label className="label-form">
                      <input
                        className="input-form"
                        type="text"
                        name="name"
                        value=""
                      />
                    </label>
                  </div>
                  <div className="form-item">
                    <div className="label-title">Your e-mail</div>
                    <label className="label-form">
                      <input
                        className="input-form"
                        type="email"
                        name="email"
                        value=""
                      />
                    </label>
                  </div>
                  <div className="form-item">
                    <div className="label-title">Your message</div>
                    <label className="label-form">
                      <textarea
                        className="input-form textarea-form"
                        name="message"
                      ></textarea>
                    </label>
                  </div>

                  <div className="form-contacts__button">
                    <input
                      disabled
                      type="submit"
                      value="Use The Live Support "
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
