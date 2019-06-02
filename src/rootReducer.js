import { combineReducers } from "redux";
import idPassAppReducer from "./modules/idPassApp";
import linkAppReducer from "./modules/linkApp";
import todoAppReducer from "./modules/todoApp";

export default combineReducers({
  todoAppReducer,
  idPassAppReducer,
  linkAppReducer
});
