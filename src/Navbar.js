import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
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
      <img
        className={classes.Profile}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Profile logo"
      />
    </div>
  );
};

export default Navbar;
