import useUtils from "@/hooks/useUtils";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useUtils("Page Not Found");
  return (
    <>
      <div
        className=""
        data-v-be7bbc8c=""
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="logincard" data-v-be7bbc8c="">
          <div className="" data-v-be7bbc8c="">
            <div className="error-body uk-text-center" data-v-be7bbc8c="">
              <h1
                className="error-title uk-text-danger"
                data-v-be7bbc8c=""
                style={{ color: "#f0506e", fontSize: "60px" }}
              >
                404
              </h1>
              <h3
                className="uk-text-uppercase error-subtitle"
                data-v-be7bbc8c=""
              >
                PAGE NOT FOUND !
              </h3>
              <p className="uk-text-muted mt-4 mb-4" data-v-be7bbc8c="">
                YOU SEEM TO HAVE BEEN LOST
              </p>
              <Link
                to="/"
                className="uk-button uk-button-danger uk-button-rounded waves-effect waves-light mb-5 uk-text-white"
                data-v-be7bbc8c=""
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
