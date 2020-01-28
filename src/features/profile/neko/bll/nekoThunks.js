import { nekoSetName} from "./redux/nekoActions";
import {NekoAPI} from "../dal/NekoAPI";
import {getCookie, setCookie} from "../../../helpers/authorization/cookies";
import {nekoLoading, nekoError, nekoSuccess} from "./callbacks/nekoBooleanCallbacks";


export const getMe = () => async (dispatch, getStore) => {
        const token = getCookie('token') || '';

        if (token) {
            nekoLoading(dispatch, true);

            try {
                const data = await NekoAPI.getMe(token);
                if (data.error) {
                    nekoError(dispatch, data.error);
                    if (data.error === 'bad token!') setCookie('token', '', -1000);

                    console.log('Neko Get Me Error!', data.error, token);
                } else {
                    setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    dispatch(nekoSetName(data.name));
                    nekoSuccess(dispatch, true);

                    console.log('Neko Get Me Success!', data.name)
                }
            } catch (e) {
                nekoError(dispatch, e.response.data.error);
                if (e.response.data.error === 'bad token!') setCookie('token', '', -1000);

                console.log('Neko Get Me Error!', {...e})
            }
        }
    };
