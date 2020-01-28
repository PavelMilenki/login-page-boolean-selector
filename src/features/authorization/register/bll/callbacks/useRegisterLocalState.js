import {useState} from "react";
import {registerClear} from "./registerBooleanCallbacks";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {REGISTER_ERROR} from "../redux/registerActions";

export const useRegisterLocalState = (dispatch) => {
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('testPassword');
    const [password2, setPassword2] = useState('testPassword');

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([REGISTER_ERROR]);

    const setEmailCallback = (emailC) => {
        setEmail(emailC);
        error.data.message && registerClear(dispatch);
    };
    const setPasswordCallback = (passwordC) => {
        setPassword(passwordC);
        error.data.message && registerClear(dispatch);
    };
    const setPassword2Callback = (password2C) => {
        setPassword2(password2C);
        error.data.message && registerClear(dispatch);
    };

    return {
        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        redirect, setRedirect,
    }
};
