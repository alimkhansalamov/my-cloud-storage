import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Authorization/Registration";
import Login from "./components/Authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions/user";
import Disk from "./components/Disk/Disk";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth ? (
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Disk />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
