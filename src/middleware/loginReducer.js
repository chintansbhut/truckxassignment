import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  token: null,
  isError: false,
  error: null,
};

const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        token: actions.payload.token,
        isError: false,
        error: null,
      });
    case actionTypes.LOGIN_FAIL:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isError: true,
        error: actions.payload.error,
      });
    default:
      return state;
  }
};
export default loginReducer;
