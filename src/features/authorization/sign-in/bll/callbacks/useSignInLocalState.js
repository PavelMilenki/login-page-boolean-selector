import {useState} from "react";
import {signInClear} from "./signInBooleanCallbacks";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {SIGN_IN_ERROR} from "../redux/signInActions";

export const useSignInLocalState = (dispatch) => {
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('testPassword');
    const [rememberMe, setRememberMe] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([SIGN_IN_ERROR]);

    const setEmailCallback = (emailC) => {
        setEmail(emailC);
        error.data.message && signInClear(dispatch);
    };
    const setPasswordCallback = (passwordC) => {
        setPassword(passwordC);
        error.data.message && signInClear(dispatch);
    };
    const setRememberMeCallback = (rememberMeC) => {
        setRememberMe(rememberMeC);
        error.data.message && signInClear(dispatch);
    };

    return {
        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,
    }
};
