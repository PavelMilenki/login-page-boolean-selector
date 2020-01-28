import {useDispatch} from "react-redux";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {useRegisterLocalState} from "./useRegisterLocalState";
import {REGISTER_ACTION_NAMES} from "../redux/registerActions";
import {registerCallback} from "./registerCallBacks";

export const useRegisterContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(REGISTER_ACTION_NAMES);
    const dispatch = useDispatch();

    // local state
    const {
        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        redirect, setRedirect,
    } = useRegisterLocalState(dispatch);

    // useEffects


    // callbacks
    const register = registerCallback(dispatch, email, password, password2);

    return {
        loading, error, success, dispatch,

        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        redirect, setRedirect,

        register,
    }
};
