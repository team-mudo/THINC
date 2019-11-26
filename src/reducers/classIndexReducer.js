import { ENTERPROJECT } from "../actions";

export default function(state = 0, action) {
  switch (action.type) {
    case ENTERPROJECT:
      return action.payload;
    default:
      return state;
  }
}
