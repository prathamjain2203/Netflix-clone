import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Landingsceen.module.css";

class Landing extends Component {
  render() {
    return (
      <div className={classes.Landing}>
        <div className={classes.Landing_background}>
          <img
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
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className={classes.Landing_form}>
            <form>
              <input
                className={classes.Input}
                type="email"
                placeholder="Email address"
              />
              <button className={classes.Button_getStarted}>Get Started</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
