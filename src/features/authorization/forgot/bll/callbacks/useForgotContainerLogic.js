import {useDispatch} from "react-redux";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {useForgotLocalState} from "./useForgotLocalState";
import {FORGOT_ACTION_NAMES} from "../redux/forgotActions";
import {forgotCallback} from "./forgotCallBacks";

export const useForgotContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(FORGOT_ACTION_NAMES);
    const dispatch = useDispatch();

    // local state
    const {
        email, setEmailCallback,

        redirect, setRedirect,
    } = useForgotLocalState(dispatch);

    // useEffects


    // callbacks
    const forgot = forgotCallback(dispatch, email);

    return {
        loading, error, success, dispatch,

        email, setEmailCallback,

        redirect, setRedirect,

        forgot,
    }
};
