const initialState = {
  token: null,
  error: null,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        token: actions.token,
        error: null,
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
      };
    default:
      return state;
  }
};

export default reducer;
