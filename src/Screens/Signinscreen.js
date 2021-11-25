import React, { Component } from "react";
import classes from "./Signinscreen.module.css";
import { connect } from "react-redux";
import withRouter from "../hoc/withRouter";
import * as actions from "../Store/actions/signup";

class Signin extends Component {
  state = {
    isSignup: false,
    email: "",
    password: "",
  };

  signupHandler = () => {
    this.setState((prevState) => {
      return {
        isSignup: !prevState.isSignup,
      };
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.email,
      this.state.password,
      this.state.isSignup
    );

    setTimeout(() => {
      if (this.props.token) {
        console.log("hey");
        this.props.navigate("/home");
      }
    }, 1500);
  };

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
          <button
            onClick={this.signupHandler}
            className={classes.Signup_button}
          >
            {this.state.isSignup ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className={classes.Signin_gradient}></div>
        <div className={classes.Sign_body}>
          <form
            onSubmit={(e) => this.onSubmitHandler(e)}
            className={classes.Signin_form}
          >
            {this.props.error ? (
              <h3 style={{ color: "red" }}>{this.props.error}</h3>
            ) : null}
            {this.state.isSignup ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <button>{this.state.isSignup ? "Signup" : "Sign in"}</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.error,
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (email, password, isSignup) =>
      dispatch(actions.signup(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
