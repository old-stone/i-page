import { combineReducers } from "redux";
import idAppReducer from "./modules/idPassApp";
import linkAppReducer from "./modules/linkApp";
import todoAppReducer from "./modules/todoApp";

export default combineReducers({
  todoAppReducer,
  idAppReducer,
  linkAppReducer
});
