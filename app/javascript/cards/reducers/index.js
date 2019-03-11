import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { reducer } from "redux-form";

export default combineReducers({
  cards: cardsReducer,
  form: reducer
});
