import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const Personal = () => {
  useUtils("Personal banking");
  return (
    <>
      {/* hero section  */}
      <Hero
        title="Personal banking"
        currentPage="Personal"
        image="/home/personalbankinghero.jpg"
      />
      {/* hero section ends  */}

      <section className="in-section about">
        <div className="container">
          <h3>
            Persoanl <span>banking</span>{" "}
          </h3>
          <p>
            For personal clients corrycheckings provides current accounts and
            savings accounts that complement each other and combine to suit the
            needs of each individual's cash portfolio.
          </p>

          <p>
            Our growing range of personal accounts is designed to provide every
            client with a corrycheckings portfolio of accounts that offers the
            ability to balance the access and banking services required for
            their current account funds, with the level of interest they would
            like to receive on their savings and fixed term deposits.{" "}
          </p>
          <p>FAll of our personal accounts can be held by up to four people.</p>
          <p>
            *We do not control and are not responsible for the Visa Win Every
            Day Winter Promotion, the Visa Worldwide website, its content or
            availability. We therefore do not endorse or make any
            representations about the Promotion or the contents of the VISA
            Worldwide website, or any material found there, or any results that
            may be obtained from using it. If you decide to access the websites
            linked from our website, you do so entirely at your own risk.
          </p>
        </div>
      </section>
    </>
  );
};

export default Personal;
