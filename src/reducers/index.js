import { combineReducers } from "redux";
import user from "./user";
import signup from "./signup";
import login from "./login";
import rooms from "./rooms";

export default combineReducers({
  user,
  signup,
  login,
  rooms
});
