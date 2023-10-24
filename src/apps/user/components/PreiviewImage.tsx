import { IPreiviewImageProps } from "@/types";
import ReactDOM from "react-dom";

const PreiviewImage = ({ closeModal, sendImg }: IPreiviewImageProps) => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div className="preiviewDialog " id="preiviewDialog">
        <div className="dialog-content">
          <div className="upload-img">
            <img
              src="https://images6.alphacoders.com/106/thumbbig-1065654.webp"
              id="uploadPreview"
              alt=""
            />
          </div>
          <div className="dialogbtn">
            <button
              className="btn btn-danger cancel"
              onClick={() => {
                closeModal();
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                sendImg();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default PreiviewImage;
