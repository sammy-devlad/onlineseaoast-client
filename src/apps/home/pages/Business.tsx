import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const Business = () => {
  useUtils("Business banking");
  return (
    <>
      {/* hero section  */}
      <Hero
        title="Business banking"
        currentPage="business"
        image="/home/businessbankinghero.jpg"
      />
      {/* hero section ends  */}

      <section className="in-section about">
        <div className="container">
          <h3>
            Business <span>bank</span> accounts available through{" "}
            <span>professional</span> advisers
          </h3>

          <p>
            At our bank we have a wealth of specialist knowledge and experience
            in providing your clients with tailored accounts for limited
            companies, partnerships and contractors.
            <br />
          </p>

          <h5>Corporate Account</h5>
          <p>
            Designed to be a business' primary current account, allowing up to
            200 day-to-day transactions per statement month and a VISA
            Deferred-Debit card.
          </p>
          <h5>Asset 30 Account - Issue Two</h5>
          <p>
            An account that offers a slightly more favourable rate of interest
            on a business' cash funds, providing that 30 days notice can be
            given of each intended withdrawal.
          </p>
          <h5>Business Notice Account 95</h5>
          <p>
            An account designed for an organisation's funds of over £25,000 to
            allow your business clients to gain favourable interest rates but
            still retain access, providing that 95 days' notice can be given
            before making a withdrawal
          </p>
          <h5>Term Deposit Account (Non-Personal)</h5>
          <p>
            Our sterling Term Deposit Accounts are designed to provide business
            clients with a fixed return on funds of over £50,000 that can be
            deposited for an agreed term of between 1 week and 24 months.
          </p>
          <h5>Asset 30 (Opened before 2nd April 2012)</h5>
          <p>This account is off sale</p>
        </div>
      </section>
    </>
  );
};

export default Business;
