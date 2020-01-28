import {forgotInitialState} from "./forgotInitialState";
import {FORGOT} from "./forgotActions";

export const forgotReducer = (state = forgotInitialState, action) => {
    switch (action.type) {
        case FORGOT: { // blank
            return {
                ...state,
            }
        }

        default: {
            return state;
        }
    }
};
