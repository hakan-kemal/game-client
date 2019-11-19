import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import addIcon from "./addIcon";

export default combineReducers({
  login,
  signup,
  addIcon
});
