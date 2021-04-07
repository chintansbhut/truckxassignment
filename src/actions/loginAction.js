import { loginService } from "../service/loginService.js";
import * as actionTypes from "./actionTypes.js";
import history from "../history";

export const login = (loginData) => {
  return async (dispatch) => {
    const response = await loginService(loginData);
    if (response.status == 200) {
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginFail(response.data));
    }
  };
};

const loginSuccess = (response) => {
  history.push("/users");
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      token: response.token,
    },
  };
};

const loginFail = (response) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    payload: {
      error: response.error,
    },
  };
};
