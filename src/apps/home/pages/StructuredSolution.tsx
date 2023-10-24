import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const StructuredSolution = () => {
  useUtils("Structured solution");
  return (
    <>
      {/* hero section  */}
      <Hero
        title=""
        currentPage="Structured Solution"
        image="/home/structured.jpg"
      />
      {/* hero section ends  */}
      <section className="in-section about">
        <div className="container">
          <h3>
            Structured <span>Solutions</span>{" "}
          </h3>

          <p>
            The Structured Product range from corrycheckings is designed to
            provide a variety of capital protected Structured Deposits and
            Investment solutions to take advantage of economic and market
            trends.
          </p>
          <p>
            Plans currently open to investment / deposits are listed below with
            closing dates. For each Plan's full details, please see the relevant
            Term Sheets and Product Guides. Where possible we also provide sales
            aids and draft suitability letter paragraphs, aimed at helping
            professional financial advisers to clearly explain our plans to your
            clients.{" "}
          </p>
          <p>
            For a better understanding of our full Structured Product range
            please visit Our Structured Products Explained.
          </p>
          <br />
          <h4>More Information</h4>
          <p>
            The inclusion of a product on this site does not indicate its
            suitability to an individual's needs. Advice with regard to the
            suitability of structured products should only be obtained from a
            Financial Adviser.
          </p>
        </div>
      </section>
    </>
  );
};

export default StructuredSolution;
