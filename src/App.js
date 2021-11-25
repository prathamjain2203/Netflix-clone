import "./App.css";
import React from "react";
import Homescreen from "./Screens/Homescreen";
import Signin from "./Screens/Signinscreen";
import { Route, Routes } from "react-router-dom";
import Landing from "./Screens/Landingscreen";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function App(props) {
  let routes = (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Homescreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
  if (props.isAuth) {
    routes = (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Homescreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  return <div className="App">{routes}</div>;
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.token,
  };
};
export default connect(mapStateToProps)(App);
