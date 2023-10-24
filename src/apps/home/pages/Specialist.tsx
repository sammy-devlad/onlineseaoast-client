import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const Specialist = () => {
  useUtils("Specialist banking");
  return (
    <>
      {/* hero section  */}
      <Hero title="" currentPage="Specialist" image="/home/specialist.jpg" />
      {/* hero section  */}

      <section className="in-section about">
        <div className="container">
          <h3>
            Specialist <span>bank</span> accounts available through{" "}
            <span>professional</span> advisers
          </h3>

          <div className="row justify-content-center">
            <div
              className="col-md-4 col-10 text-center mb-3  "
              data-aos="fade-left"
            >
              <img src="/home/spb1.jpg" alt="" />
            </div>
            <div
              className="col-md-4 col-10 text-center mb-3  "
              data-aos="fade-right"
            >
              <img src="/home/spb2.jpg" alt="" />
            </div>
            <div
              className="col-md-4 col-10 text-center mb-3  "
              data-aos="fade-up"
            >
              <img src="/home/spb3.jpg" alt="" />
            </div>
            <div
              className="col-md-4 col-10 text-center mb-3"
              data-aos="fade-down"
            >
              <img src="/home/spb4.jpg" alt="" />
            </div>
            <div
              className="col-md-4 col-10 text-center mb-3"
              data-aos="fade-left"
            >
              <img src="/home/spb5.jpg" alt="" />
            </div>
            <div
              className="col-md-4 col-10 text-center mb-3"
              data-aos="fade-right"
            >
              <img src="/home/spb6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialist;
