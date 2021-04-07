import {
  getUsers,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../service/usersService";
import * as actionTypes from "./actionTypes.js";
import history from "../history";

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const response = await getUsers();
    if (response.status == 200) {
      const users = response.data.data;
      users.map((item) => {
        if (!item.createdAt) {
          item.createdAt = new Date().toDateString();
        }
        if (!item.phone) {
          item.phone = "1234567890";
        }
        if (!item.username) {
          item.username = item.first_name;
        }
        return item;
      });
      const currentState = getState();
      const createdUsers = [...currentState.usersData.createdUsers];
      const newusers = [...users, ...createdUsers];
      dispatch(fetchUsersSuccess(newusers));
    } else {
      dispatch(fetchUsersFail(response.data));
    }
  };
};

const fetchUsersSuccess = (response) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: {
      users: response,
    },
  };
};

const fetchUsersFail = (response) => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    payload: {
      users: [],
    },
  };
};

export const createUser = (user) => {
  return async (dispatch, getState) => {
    const response = await createUserService(user);
    const currentState = getState();
    const createdUsers = [...currentState.usersData.createdUsers];
    if (response.status == 201) {
      const newUser = response.data;
      newUser.first_name = newUser.name;
      newUser.createdAt = new Date(newUser.createdAt).toDateString();
      const newCreatedUsers = [...createdUsers, newUser];
      dispatch(createuserSuccess(newCreatedUsers));
    } else {
      dispatch(createUserFail(createdUsers));
    }
  };
};

const createuserSuccess = (response) => {
  history.push("/users");
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: {
      createdUsers: response,
    },
  };
};

const createUserFail = (response) => {
  return {
    type: actionTypes.CREATE_USER_FAIL,
    payload: {
      createdUsers: response,
    },
  };
};

export const updateUser = (user) => {
  return async (dispatch, getState) => {
    const response = await updateUserService(user);
    const currentState = getState();
    const users = [...currentState.usersData.users];
    if (response.status == 200) {
      const updatedUser = response.data;
      const remainingUsers = users.filter((item) => item.id == updatedUser.id);
      updatedUser.first_name = updatedUser.name;
      updatedUser.createdAt = new Date(updatedUser.createdAt).toDateString();
      const newupdatedUsers = [...remainingUsers, updatedUser];
      dispatch(updateuserSuccess(newupdatedUsers));
    } else {
      dispatch(updateUserFail(users));
    }
  };
};

const updateuserSuccess = (response) => {
  history.push("/users");
  return {
    type: actionTypes.EDIT_USER_SUCCESS,
    payload: {
      createdUsers: response,
    },
  };
};

const updateUserFail = (response) => {
  return {
    type: actionTypes.EDIT_USER_FAIL,
    payload: {
      createdUsers: response,
    },
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    const response = await deleteUserService(id);
    const currentState = getState();
    const users = [...currentState.usersData.users];
    const createdUsers = [...currentState.usersData.createdUsers];
    if (response.status == 204) {
      const remainingUsers = users.filter((item) => item.id != id);
      const remainingCreatedUsers = createdUsers.filter(
        (item) => item.id != id
      );
      dispatch(deleteUserSuccess(remainingUsers, remainingCreatedUsers));
    } else {
      dispatch(deleteUserFail(users));
    }
  };
};

const deleteUserSuccess = (remainingUsers, remainingCreatedUsers) => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: {
      users: remainingUsers,
      createdUsers: remainingCreatedUsers,
    },
  };
};
const deleteUserFail = (response) => {
  return {
    type: actionTypes.DELETE_USER_FAIL,
    payload: {
      users: response,
    },
  };
};
