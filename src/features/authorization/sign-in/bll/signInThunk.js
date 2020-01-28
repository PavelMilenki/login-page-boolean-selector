import {SignInAPI} from "../dal/SignInAPI";
import {passwordCoding} from "../../../helpers/authorization/passwordCoding";
import { nekoSetName} from "../../../profile/neko/bll/redux/nekoActions";
import {setCookie} from "../../../helpers/authorization/cookies";

import {signInError, signInLoading, signInSuccess} from "./callbacks/signInBooleanCallbacks";
import { nekoClear } from "../../../profile/neko/bll/callbacks/nekoBooleanCallbacks";


export const signIn = (email, password, rememberMe) => async (dispatch, getStore) => {
            nekoClear(dispatch);
            signInLoading(dispatch, true);

            try {
                const data = await SignInAPI.signIn(email, passwordCoding(password), rememberMe);

                if (data.error) {
                    signInError(dispatch, data.error);

                } else {
                    setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    dispatch(nekoSetName(data.name));
                    signInSuccess(dispatch, true);

                    console.log('Neko Sign-in Success!', data)
                }
            } catch (e) {
                signInError(dispatch, e.response.data.error);

                console.log('Neko Sign-in Error!', {...e})
            }
        };
