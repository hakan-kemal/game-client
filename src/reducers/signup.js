import { NEW_USER } from "../actions";

export default function(state = "", action = {}) {
  switch (action.type) {
    case NEW_USER:
      return action.payload;
    default:
      return state;
  }
}
