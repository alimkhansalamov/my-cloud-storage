import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../../assets/img/cloud.svg";
import avatarLogo from "./../../assets/img/avatar.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { getFiles, searchFiles } from "../../actions/file";
import { showLoader } from "../../reducers/appReducer";
import { API_URL } from "../../config";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.files.currentDir);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);
  const avatar = currentUser.avatar
    ? `${API_URL + currentUser.avatar}`
    : avatarLogo;

  function searchChangeHandler(e) {
    setSearchName(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if (e.target.value !== "") {
      {
        setSearchTimeout(
          setTimeout(
            (value) => {
              dispatch(searchFiles(value));
            },
            500,
            e.target.value
          )
        );
      }
    } else {
      dispatch(getFiles(currentDir));
    }
  }

  return (
    <div className="container">
      <div className="navbar">
        <NavLink to="/" className="navbar__header-link">
          <img className="navbar__logo" src={Logo} alt="navbar logo" />
        </NavLink>

        <div className="navbar__header">
          <NavLink to="/" className="navbar__header-link">
            My Cloud Storage
          </NavLink>
        </div>
        {isAuth && (
          <input
            value={searchName}
            onChange={(e) => searchChangeHandler(e)}
            type="text"
            className="navbar__search"
            placeholder="Search files..."
          />
        )}
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login" className="navbar__link">
              Log In
            </NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration" className="navbar__link">
              {" "}
              Sign Up{" "}
            </NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            <NavLink to="/login" className="navbar__link">
              {" "}
              Log Out{" "}
            </NavLink>
          </div>
        )}
        {isAuth && (
          <NavLink to="/profile">
            <img className="navbar__avatar" src={avatar} alt="" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
