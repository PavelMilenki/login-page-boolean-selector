import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSignInLocalState} from "./useSignInLocalState";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {NEKO_LOADING, NEKO_SUCCESS} from "../../../../profile/neko/bll/redux/nekoActions";
import {SIGN_IN_ACTION_NAMES} from "../redux/signInActions";
import {getMe} from "../../../../profile/neko/bll/nekoThunks";
import {signInCallback} from "./signInCallBacks";

export const useSignInContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(SIGN_IN_ACTION_NAMES);
    const [nekoSuccess, nekoLoading] = useBooleanSelector([NEKO_SUCCESS, NEKO_LOADING]);
    const dispatch = useDispatch();
    const {name} = useSelector((store) => store.neko);

    // local state
    const {
        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,
    } = useSignInLocalState(dispatch);

    // useEffects
    useEffect(() => {
        if (!name) dispatch(getMe());
    }, []);

    // callbacks
    const signIn = signInCallback(dispatch, email, password, rememberMe);

    return {
        loading, error, success, dispatch,
        nekoSuccess, nekoLoading,

        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,

        signIn,
    }
};
