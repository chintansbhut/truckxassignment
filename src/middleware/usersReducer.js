import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: [],
  createdUsers: [],
};

const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.EDIT_USER_SUCCESS:
    case actionTypes.CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        createdUsers: actions.payload.createdUsers,
      });
    case actionTypes.CREATE_USER_FAIL:
      return Object.assign({}, state, {
        createdUsers: actions.payload.createdUsers,
      });
    case actionTypes.FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: actions.payload.users,
      });
    case actionTypes.FETCH_USERS_FAIL:
      return Object.assign({}, state, {
        users: [],
      });
    case actionTypes.DELETE_USER_SUCCESS:
      return Object.assign({}, state, {
        createdUsers: actions.payload.createdUsers,
        users: actions.payload.users,
      });
    default:
      return state;
  }
};
export default usersReducer;
