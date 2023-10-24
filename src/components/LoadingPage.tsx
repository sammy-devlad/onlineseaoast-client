import useUtils from "@/hooks/useUtils";
import ReactDOM from "react-dom";

const LoadingPage = () => {
  useUtils("Please wait");
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;

  return ReactDOM.createPortal(
    <>
      <div
        className=""
        data-v-be7bbc8c=""
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "fixed",
          top: "0",
          zIndex: 9999,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="logincard" data-v-be7bbc8c="">
          <div className="" data-v-be7bbc8c="">
            <div className="error-body uk-text-center" data-v-be7bbc8c="">
              <h1
                className="error-title uk-text-danger"
                data-v-be7bbc8c=""
                style={{
                  color: "#fff",
                  fontSize: "60px",
                  textTransform: "capitalize",
                }}
              >
                please wait
              </h1>
              <h3
                className="uk-text-uppercase error-subtitle"
                data-v-be7bbc8c=""
              >
                <i
                  className="fa-solid fa-spinner fa-spin"
                  style={{ fontSize: "60px", color: "rgb(240, 80, 110)" }}
                ></i>
              </h3>
              <p
                className="uk-text-muted mt-4 mb-4"
                data-v-be7bbc8c=""
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              >
                page is loading
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default LoadingPage;
