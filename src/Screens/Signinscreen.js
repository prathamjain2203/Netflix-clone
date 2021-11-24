import React, { Component } from "react";
import classes from "./Signinscreen.module.css";
import { connect } from "react-redux";

class Signin extends Component {
  render() {
    return (
      <div className={classes.Signin}>
        <div className={classes.Signin_background}>
          <img
            className={classes.Logo}
            src={
              "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            }
            alt="Netflix logo"
          />
          <button className={classes.Signup_button}>Sign up</button>
        </div>
        <div className={classes.Signin_gradient}></div>
        <div className={classes.Sign_body}>
          <form className={classes.Signin_form}>
            {this.props.isSignup ? <h1>Sign Up</h1> : <h1>Sign n</h1>}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    isSignup: state.isSignup,
  };
};

export default connect(mapStateToProps)(Signin);
