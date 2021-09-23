import { createStore } from "redux";
import StepsReducer from "./reducers";

const store = createStore(StepsReducer);

export default store