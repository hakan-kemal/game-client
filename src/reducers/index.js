import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import rooms from "./rooms";

export default combineReducers({
  login,
  signup,
  rooms
});
