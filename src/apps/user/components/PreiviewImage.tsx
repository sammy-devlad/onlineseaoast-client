import { IPreiviewImageProps } from "@/types";
import ReactDOM from "react-dom";

const PreiviewImage = ({
  closeModal,
  sendImg,
  previeIMG,
}: IPreiviewImageProps) => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div className="img-preview " id="img-previewi">
        <div className="img-preview-content">
          <div className="headder">
            <h2 className="text-center">Prieview image</h2>
          </div>
          <div className="conttentt">
            <img
              className="file-upload-image back"
              id="uploadPreview"
              src="#"
              alt="avatar"
            />
          </div>

          <div className="subBtn d-flex">
            <button
              className="btn btn-danger mr-4"
              id="cloBtn"
              onClick={() => {
                closeModal();
              }}
            >
              cancel
            </button>
            <div>
              <input
                type="file"
                name="profile_image"
                id="profilpics"
                accept=".jpg, .jpeg, .png"
                className="file-upload-input back"
                onChange={previeIMG}
                hidden
              />
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
      </div>
    </>,
    dialog
  );
};

export default PreiviewImage;
