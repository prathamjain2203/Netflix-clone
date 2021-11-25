import React from "react";
import Navbar from "../Navbar";
import classes from "./Profile.module.css";
import { connect } from "react-redux";

import * as actions from "../Store/actions/signup";
const Profile = (props) => {
  const onLogoutHandler = () => {
    props.onLogout();
  };
  return (
    <div className={classes.Profile}>
      <Navbar />
      <div className={classes.Profile_body}>
        <h1 style={{ marginBottom: "20px" }}>Edit Profile</h1>
        <div className={classes.Profile_FL}>
          <img
            className={classes.Profile_logo}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile-icon"
          />
          <div className={classes.Profile_data}>
            <h5>{props.email}</h5>
            <h6
              style={{
                fontSize: "0.8rem",
                marginTop: "25px",
              }}
            >
              Plans (Current Plan: premium)
            </h6>
            <div className={classes.Plan_FL}>
              <h6>Netflix Standard (1080p)</h6>
              <button className={classes.Subscribe}>Subscribe</button>
            </div>
            <div className={classes.Plan_FL}>
              <h6>Netflix Basic (480p)</h6>
              <button className={classes.Subscribe}>Subscribe</button>
            </div>
            <button onClick={onLogoutHandler} className={classes.Signout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { email: state.email };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.onLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
