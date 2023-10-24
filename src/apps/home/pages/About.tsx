import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const About = () => {
  useUtils("More about us");
  return (
    <>
      {/* hero section  */}
      <Hero title="About us" currentPage="about" image="/home/abouthero.jpg" />
      {/* hero section ends  */}

      {/* section */}
      <section className="in-section">
        <div className="container">
          <p data-aos="zoom-in">
            At onlineseacoastacct, we have over 150 years of experience working
            with professional financial advisers in the Uae. We have earned our
            reputation by putting the traditional values of courtesy,
            convenience and a personal banking service into an efficient and
            contemporary context.
          </p>
          <p data-aos="zoom-out">
            Our insight into the needs of financial intermediaries, as well as
            the differing requirements of personal, business and specialist
            clients, allows us to focus on doing the things that matter, well;
            from answering calls quickly and professionally to developing
            uncomplicated banking solutions and protecting the valuable
            relationship between financial advisers and clients.
          </p>
          <p data-aos="zoom-in">
            Today, onlineseacoastacct is a wholly owned subsidiary of
            onlineseacoastacct. Our growing range of bank accounts and
            structured solutions is designed to be consistent with the needs of
            clients' cash portfolios, including current accounts, savings
            accounts, fixed term deposits and structured deposit products.{" "}
          </p>
          <p data-aos="zoom-out">
            Overall, at onlineseacoastacct we want you and your clients to feel
            good about banking with us.{" "}
          </p>
          <p data-aos="zoom-in">
            For an overview of our history, services and products, and our
            commitment to you and your clients, download An Introduction to
            onlineseacoastacct{" "}
          </p>
        </div>
      </section>
      {/* section ends */}
    </>
  );
};

export default About;
