import { ADD_ICON } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ADD_ICON:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
