import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "../store/reducer";

let middlewayers = [thunk, logger];


let middlewaer = applyMiddleware(...middlewayers);

export let store = createStore(reducer, middlewaer);
