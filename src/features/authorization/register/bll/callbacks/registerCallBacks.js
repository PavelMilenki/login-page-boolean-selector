import {emailValidator} from "../../../../helpers/authorization/emailValidator";
import {passwordValidator} from "../../../../helpers/authorization/passwordValidator";
import {registerError} from "./registerBooleanCallbacks";
import {register} from "../registerThunk";



export const registerCallback = (
    dispatch,
    email,
    password,
    password2,
) => () => {
    if (!emailValidator(email)) {
        registerError(dispatch, 'Email not valid!');

    } else if (!passwordValidator(password)) {
        registerError(dispatch, 'Password not valid! must be more than 7 characters...');

    } else if (password !== password2) {
        registerError(dispatch,"Passwords don't match!");

    } else {
        dispatch(register(email, password));
    }
};
