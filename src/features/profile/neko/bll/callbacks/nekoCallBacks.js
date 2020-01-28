import { nekoSetName} from "../redux/nekoActions";
import {nekoClear} from "./nekoBooleanCallbacks";
import {setCookie} from "../../../../helpers/authorization/cookies";



export const logoutCallback = (dispatch,) => () => {
        setCookie('token', '', -1000);
        dispatch(nekoSetName(''));
        nekoClear(dispatch);
};
