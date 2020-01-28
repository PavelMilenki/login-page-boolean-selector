import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../common/boolean-reducer/booleanCallbacks";
import {FORGOT_ACTION_NAMES} from "../redux/forgotActions";

export const forgotLoading = (dispatch, loading) => {
    booleanLoading(dispatch, FORGOT_ACTION_NAMES, loading);
};
export const forgotError = (dispatch, error) => {
    booleanError(dispatch, FORGOT_ACTION_NAMES, error);
};
export const forgotSuccess = (dispatch, success) => {
    booleanSuccess(dispatch, FORGOT_ACTION_NAMES, success);
};
export const forgotClear = (dispatch) => {
    booleanClear(dispatch, FORGOT_ACTION_NAMES);
};
