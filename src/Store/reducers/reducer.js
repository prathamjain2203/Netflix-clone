const initialState = {
  token: null,
  error: null,
  email: null,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        token: actions.token,
        error: null,
        email: actions.email,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        token: null,

        error: actions.error,
      };
    case "LOG_OUT":
      return {
        ...state,
        token: null,
        error: null,
        email: null,
      };
    default:
      return state;
  }
};

export default reducer;
