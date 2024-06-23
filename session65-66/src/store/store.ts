import { createStore } from "redux";
import openReducer from './reducers/openReducer'

const rootReducer = (openReducer)
const store = createStore(rootReducer);

export default store;