import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "../reducers/searchReducer";
import { composeWithDevTools } from "redux-devtools-extension";


export const initialState = {
    token: null,
    searchHistory: {},

}

export const store = createStore(searchReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));