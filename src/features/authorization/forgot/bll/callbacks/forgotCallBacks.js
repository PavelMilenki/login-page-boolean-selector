import {emailValidator} from "../../../../helpers/authorization/emailValidator";
import {forgotError} from "./forgotBooleanCallbacks";
import {forgot} from "../forgotThunk";



export const forgotCallback = (
    dispatch,
    email,
) => () => {
    if (!emailValidator(email)) {
        forgotError(dispatch, 'Email not valid!');

    } else {
        dispatch(forgot(email));
    }
};
