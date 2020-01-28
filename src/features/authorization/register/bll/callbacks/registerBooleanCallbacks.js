import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../common/boolean-reducer/booleanCallbacks";
import {REGISTER_ACTION_NAMES} from "../redux/registerActions";

export const registerLoading = (dispatch, loading) => {
    booleanLoading(dispatch, REGISTER_ACTION_NAMES, loading);
};
export const registerError = (dispatch, error) => {
    booleanError(dispatch, REGISTER_ACTION_NAMES, error);
};
export const registerSuccess = (dispatch, success) => {
    booleanSuccess(dispatch, REGISTER_ACTION_NAMES, success);
};
export const registerClear = (dispatch) => {
    booleanClear(dispatch, REGISTER_ACTION_NAMES);
};
