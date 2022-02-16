import React, { useState } from "react";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDisplay } from "../../reducers/fileReducer";
import { createDir } from "../../actions/file";
import Close from "./../../assets/img/close.svg";

const Popup = () => {
  const [dirName, setDirName] = useState("");
  const popupDisplay = useSelector((state) => state.files.popupDisplay);
  const currentDir = useSelector((state) => state.files.currentDir);
  const dispatch = useDispatch();

  function createHandler() {
    dispatch(createDir(currentDir, dirName));
    dispatch(setPopupDisplay("none"));
    setDirName("");
  }

  return (
    <div
      className="popup"
      onClick={() => dispatch(setPopupDisplay("none"))}
      style={{ display: popupDisplay }}
    >
      <div
        className="popup__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="popup__header">
          <div className="popup__title">Create a new folder</div>
          <button
            className="popup__close"
            onClick={() => dispatch(setPopupDisplay("none"))}
          >
            <img src={Close} alt="delete image" className="popup__close-btn" />
          </button>
        </div>
        <label htmlFor=""></label>
        <Input
          type="text"
          placeholder="Enter folder name"
          value={dirName}
          setValue={setDirName}
        />
        <button
          className="popup__create button"
          onClick={() => createHandler()}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Popup;
