import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useBooleanSelector} from "../../../../common/boolean-reducer/useBooleanSelectors";
import {useNekoLocalState} from "./useNekoLocalState";
import {NEKO_ACTION_NAMES} from "../redux/nekoActions";
import {logoutCallback} from "./nekoCallBacks";
import {getMe} from "../nekoThunks";
import {getCookie} from "../../../../helpers/authorization/cookies";


export const useNekoContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(NEKO_ACTION_NAMES);
    const {name} = useSelector((store) => store.neko);
    const dispatch = useDispatch();

    // local state
    const {
        show, setShow,

        redirect, setRedirect,
    } = useNekoLocalState(dispatch);

    // useEffects
    useEffect(() => {
        if (!name) dispatch(getMe());
    }, []);

    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);

        else setShow(true);
    }, [name, error]);

    // callbacks
    const logout = logoutCallback(dispatch);

    return {
        loading, error, success, dispatch,
        name,

        show, setShow,

        redirect, setRedirect,

        logout,
    }
};
