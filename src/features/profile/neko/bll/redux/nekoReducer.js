import {nekoInitialState} from "./nekoInitialState";
import { NEKO_SET_NAME} from "./nekoActions";

export const nekoReducer = (state = nekoInitialState, action) => {
    switch (action.type) {
        case NEKO_SET_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }

        default: {
            return state;
        }
    }
};
