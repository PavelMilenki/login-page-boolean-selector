import {useState} from "react";
import {forgotClear} from "./forgotBooleanCallbacks";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {FORGOT_ERROR} from "../redux/forgotActions";

export const useForgotLocalState = (dispatch) => {
    const [email, setEmail] = useState('test@email.com');

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([FORGOT_ERROR]);

    const setEmailCallback = (emailC) => {
        setEmail(emailC);
        error.data.message && forgotClear(dispatch);
    };

    return {
        email, setEmailCallback,

        redirect, setRedirect,
    }
};
