import axios from "axios";

export const signupSuccess = (authData) => {
  return {
    type: "SIGNUP_SUCCESS",
    token: authData.idToken,
  };
};

export const signupError = (error) => {
  return {
    type: "SIGNUP_ERROR",
    error: error.message,
  };
};

export const signup = (email, password, isSignup) => {
  return (dispatch) => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwMx9nOfUbHg9TBuP4LneaHIpI884cHfE";

    if (isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwMx9nOfUbHg9TBuP4LneaHIpI884cHfE";
    }

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(url, authData)
      .then((response) => {
        dispatch(signupSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signupError(error.response.data.error));
      });
  };
};
