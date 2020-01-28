import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../common/boolean-reducer/booleanCallbacks";
import {SIGN_IN_ACTION_NAMES} from "../redux/signInActions";

export const signInLoading = (dispatch, loading) => {
    booleanLoading(dispatch, SIGN_IN_ACTION_NAMES, loading);
};
export const signInError = (dispatch, error) => {
    booleanError(dispatch, SIGN_IN_ACTION_NAMES, error);
};
export const signInSuccess = (dispatch, success) => {
    booleanSuccess(dispatch, SIGN_IN_ACTION_NAMES, success);
};
export const signInClear = (dispatch) => {
    booleanClear(dispatch, SIGN_IN_ACTION_NAMES);
};
