import { SEARCH } from "../actions/searchActions";
import { initialState } from "../congigStore/store";

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state, token: action.token,
            };

        default:
            return state;
    }
}