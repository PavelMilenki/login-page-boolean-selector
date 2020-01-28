import {signInInitialState} from "./signInInitialState";
import { SIGN_IN} from "./signInActions";

export const signInReducer = (state = signInInitialState, action) => {
    switch (action.type) {
        case SIGN_IN: { // blank
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};
