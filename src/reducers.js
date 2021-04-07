import { combineReducers } from "redux";
import loginReducer from "./middleware/loginReducer";
import usersReducer from "./middleware/usersReducer";

const rootReducers = combineReducers({
  loginData: loginReducer,
  usersData: usersReducer,
});

export default rootReducers;
