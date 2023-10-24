import useUtils from "@/hooks/useUtils";

const ConfirmEmail = () => {
  useUtils("Confirm your email");
  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Form
            <span> Submit</span>
          </h2>
        </div>
        <div className="authCardBody">
          <form>
            <div className="text-center">
              <h3>Check your mail box for confirmation mail</h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
