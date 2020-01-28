
import {
    booleanLoading,
    booleanError,
    booleanSuccess,
    booleanClear
} from "../../../../common/boolean-reducer/booleanCallbacks";
import {NEKO_ACTION_NAMES} from "../redux/nekoActions";

export const nekoLoading = (dispatch, loading) => {
    booleanLoading(dispatch, NEKO_ACTION_NAMES, loading);
};
export const nekoError = (dispatch, error) => {
    booleanError(dispatch, NEKO_ACTION_NAMES, error);
};
export const nekoSuccess = (dispatch, success) => {
    booleanSuccess(dispatch, NEKO_ACTION_NAMES, success);
};
export const nekoClear = (dispatch) => {
    booleanClear(dispatch, NEKO_ACTION_NAMES);
};
