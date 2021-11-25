import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { connect } from "react-redux";
import * as actions from "./Store/actions/signup";

const Navbar = (props) => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const onLogoutHandler = () => {
    props.onLogout();
  };
  const navClass = [classes.Navbar];
  if (show) {
    navClass.push(classes.show);
  }
  return (
    <div className={navClass.join(" ")}>
      <img
        className={classes.Logo}
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="Netflix logo"
      />
      <button onClick={onLogoutHandler} className={classes.Button}>
        Log out
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.onLogout()),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
