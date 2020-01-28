import {registerInitialState} from "./registerInitialState";
import { REGISTER} from "./registerActions";

export const registerReducer = (state = registerInitialState, action) => {
    switch (action.type) {
        case REGISTER: { // blank
            return {
                ...state,
            }
        }

        default: {
            return state;
        }
    }
};
