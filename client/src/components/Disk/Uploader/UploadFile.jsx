import React from "react";
import "./Uploader.css";
import { useDispatch } from "react-redux";
import { removeUploadFile } from "../../../reducers/uploadReducer";
import Close from "./../../../assets/img/close.svg";

const UploadFile = ({ file }) => {
  const dispatch = useDispatch();
  return (
    <div className="upload-file">
      <div className="upload-file__header">
        <div className="upload-file__name">{file.name}</div>
        <button
          className="upload-file__close"
          onClick={() => dispatch(removeUploadFile(file.id))}
        >
          <img src={Close} alt="" className="upload-file__close-btn" />
        </button>
      </div>
      <div className="upload-file__progress-bar">
        <div
          className="upload-file__upload-bar"
          style={{ width: file.progress + "%" }}
        />
        <div className="upload-file__percent">{file.progress}%</div>
      </div>
    </div>
  );
};

export default UploadFile;
