import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
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
        onClick={() => {
          navigate("/home");
        }}
        className={classes.Logo}
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="Netflix logo"
      />

      <img
        className={classes.Profile}
        onClick={() => {
          navigate("/profile");
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="profile-icon"
      />
    </div>
  );
};

export default Navbar;
