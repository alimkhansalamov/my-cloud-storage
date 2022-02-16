import React from "react";
import "./Uploader.css";
import UploadFile from "./UploadFile";
import { useDispatch, useSelector } from "react-redux";
import { hideUploader } from "../../../reducers/uploadReducer";
import Close from "./../../../assets/img/close.svg";

const Uploader = () => {
  const files = useSelector((state) => state.upload.files);
  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();
  return (
    isVisible && (
      <div className="uploader">
        <div className="uploader__header">
          <div className="uploader__title">Uploads</div>
          <button
            className="uploader__close"
            onClick={() => dispatch(hideUploader())}
          >
            <img
              src={Close}
              alt="close image"
              className="uploader__close-btn"
            />
          </button>
        </div>
        {files.map((file) => (
          <UploadFile key={file.id} file={file} />
        ))}
      </div>
    )
  );
};

export default Uploader;
