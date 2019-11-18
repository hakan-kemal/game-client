import { ALL_IMAGES, NEW_IMAGE } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      return action.payload;
    case NEW_IMAGE:
      return [action.payload, ...state];
    default:
      return state;
  }
}
