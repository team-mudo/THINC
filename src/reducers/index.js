import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import SizeReducer from "./sizeReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  form: formReducer,
  size: SizeReducer,
  user: UserReducer
});

export default rootReducer;
