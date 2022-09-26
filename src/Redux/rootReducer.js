import { combineReducers } from "redux";
import userReducer from "../Pages/store/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer