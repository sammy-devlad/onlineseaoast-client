import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastDialog = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>,
    dialog
  );
};

export default ToastDialog;
