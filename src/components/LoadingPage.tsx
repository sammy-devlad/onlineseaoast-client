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
          backgroundColor: "rgb(136, 148, 171)",
        }}
      >
        <div className="logincard" data-v-be7bbc8c="">
          <div className="" data-v-be7bbc8c="">
            <div className="error-body uk-text-center" data-v-be7bbc8c="">
              <img src="/home/gear.gif" alt="gear" />

              <p
                className="uk-text-muted mt- mb-4"
                data-v-be7bbc8c=""
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              >
                Loading..
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
