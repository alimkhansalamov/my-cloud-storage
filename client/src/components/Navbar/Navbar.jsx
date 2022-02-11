import React from "react";
import "./Navbar.css";
import Logo from "./../../assets/img/navbar-logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="navbar">
        <img className="navbar__logo" src={Logo} alt="navbar logo" />
        <div className="navbar__header">MY CLOUD STORAGE</div>
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login">Log In</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration"> Sign Up </NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            <NavLink to="/login"> Log Out </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
