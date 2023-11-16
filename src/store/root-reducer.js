import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducers";

export const rootReducer = combineReducers({
  theme: themeReducer
})