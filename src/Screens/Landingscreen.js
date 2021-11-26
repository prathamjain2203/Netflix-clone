import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Landingsceen.module.css";

const Landing = () => {
  const [emailValue, setEmailValue] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const getStarterHandler = () => {
    navigate("/signin");
  };
  return (
    <div className={classes.Landing}>
      <div className={classes.Landing_background}>
        <img
          onClick={() => {
            navigate("/Landing");
          }}
          className={classes.Logo}
          src={
            "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          }
          alt="Netflix logo"
        />
        <NavLink to="/signin" className={classes.Button}>
          Sign In
        </NavLink>
      </div>
      <div className={classes.Landing_gradient}></div>
      <div className={classes.Landing_body}>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={classes.Landing_form}>
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onSubmit={getStarterHandler}
          >
            <input
              className={classes.Input}
              type="email"
              placeholder="Email address"
              value={emailValue}
              onChange={(e) => emailHandler(e)}
            />
            <button className={classes.Button_getStarted}>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
