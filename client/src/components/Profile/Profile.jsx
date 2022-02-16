import React from "react";
import { useDispatch } from "react-redux";
import { deleteAvatar, uploadAvatar } from "../../actions/user";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  function changeHandler(e) {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  }

  return (
    <div className="profile">
      <div className="profile__content">
        <button onClick={() => dispatch(deleteAvatar())} className="button">
          Delete avatar
        </button>
        <label
          htmlFor="profile__upload-input"
          className="profile__upload-label"
        >
          Upload avatar
        </label>
        <input
          accept="image/*"
          type="file"
          placeholder="Upload avatar"
          onChange={(e) => changeHandler(e)}
          id="profile__upload-input"
          className="profile__upload-input"
        />
      </div>
    </div>
  );
};

export default Profile;
