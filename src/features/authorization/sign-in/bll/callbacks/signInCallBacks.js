import {emailValidator} from "../../../../helpers/authorization/emailValidator";
import {passwordValidator} from "../../../../helpers/authorization/passwordValidator";
import {signIn} from "../signInThunk";
import {signInError} from "./signInBooleanCallbacks";



export const signInCallback = (
    dispatch,
    email,
    password,
    rememberMe
) => () => {
    if (!emailValidator(email)) {
        signInError(dispatch, 'Email not valid!');

    } else if (!passwordValidator(password)) {
        signInError(dispatch, 'Password not valid! must be more than 7 characters...');

    } else {
        dispatch(signIn(email, password, rememberMe));
    }
};
