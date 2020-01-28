import {booleanSetValue} from "./booleanActions";

// ACTION_NAMES == [loading, error, success]

export const booleanLoading = (dispatch, ACTION_NAMES, loading) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: loading, data: {}},
        {name: ACTION_NAMES[1], value: false, data: {}},
        {name: ACTION_NAMES[2], value: false, data: {}},
    ]))
};
export const booleanError = (dispatch, ACTION_NAMES, error) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: false, data: {}},
        {name: ACTION_NAMES[1], value: true, data: {message: error}},
        {name: ACTION_NAMES[2], value: false, data: {}},
    ]))
};
export const booleanSuccess = (dispatch, ACTION_NAMES, success) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: false, data: {}},
        {name: ACTION_NAMES[1], value: false, data: {}},
        {name: ACTION_NAMES[2], value: success, data: {}},
    ]))
};
export const booleanClear = (dispatch, ACTION_NAMES) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: false, data: {}},
        {name: ACTION_NAMES[1], value: false, data: {}},
        {name: ACTION_NAMES[2], value: false, data: {}},
    ]))
};
