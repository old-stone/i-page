import { combineReducers } from "redux";
import groupsReducer from "./modules/groups";
import linksReducer from "./modules/links";

export default combineReducers({
  groupsReducer,
  linksReducer
});
