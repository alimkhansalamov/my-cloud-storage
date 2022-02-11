import React from "react";
import "./File.css";
import dirLogo from "./../../../../assets/img/dir.svg";
import fileLogo from "./../../../../assets/img/file.svg";
import Download from "./../../../../assets/img/download.svg";
import Delete from "./../../../../assets/img/delete.svg";

import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrentDir } from "../../../../reducers/fileReducer";
import { deleteFile, downloadFile } from "../../../../actions/file";
import sizeFormat from "../../../../utils/sizeFormat";
const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  const openDirHandler = (file) => {
    if (file.type === "dir") {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(file._id));
    }
  };

  function downloadClickHandler(e) {
    e.stopPropagation();
    downloadFile(file);
  }

  function deleteClickHandler(e) {
    e.stopPropagation();
    dispatch(deleteFile(file));
  }

  return (
    <div className="file" onClick={() => openDirHandler(file)}>
      <img
        src={file.type === "dir" ? dirLogo : fileLogo}
        alt=""
        className="file__img"
      />
      <div className="file__name">{file.name}</div>
      <div className="file__date">{file.date.slice(0, 10)}</div>
      <div className="file__size">{sizeFormat(file.size)}</div>
      {file.type !== "dir" && (
        <button
          className="file__btn file__download"
          onClick={(e) => {
            downloadClickHandler(e);
          }}
        >
          <img src={Download} alt="Download button" />
        </button>
      )}
      <button
        className="file__btn file__delete"
        onClick={(e) => deleteClickHandler(e)}
      >
        <img src={Delete} alt="Delete button" />
      </button>
    </div>
  );
};

export default File;
