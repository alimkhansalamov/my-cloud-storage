import React from "react";
import "./FileList.css";
import { useSelector } from "react-redux";
import File from "./File/File";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FileList = () => {
  const files = useSelector((state) => state.files.files);
  const fileView = useSelector((state) => state.files.view);

  if (files.length === 0) {
    return (
      <div className="loader">
        <h1>Files not found</h1>
      </div>
    );
  }

  if (fileView === "plate") {
    return (
      <div className="filePlate">
        {files.map((file) => (
          <File file={file} key={file._id} />
        ))}
      </div>
    );
  }

  if (fileView === "list") {
    return (
      <div className="fileList">
        <div className="fileList__header">
          <div className="fileList__name">Name</div>
          <div className="fileList__date">Date</div>
          <div className="fileList__size">Size</div>
        </div>
        <TransitionGroup>
          {files.map((file) => (
            <CSSTransition
              key={file._id}
              timeout={500}
              classNames={"file"}
              exit={false}
            >
              <File file={file} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
};

export default FileList;
