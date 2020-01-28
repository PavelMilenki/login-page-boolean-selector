import {RegisterAPI} from "../dal/RegisterAPI";
import {passwordCoding} from "../../../helpers/authorization/passwordCoding";
import {registerError, registerLoading, registerSuccess} from "./callbacks/registerBooleanCallbacks";



export const register =
    (email, password) => async (dispatch, getStore) => {

            registerLoading(dispatch, true);

            try {
                const data = await RegisterAPI.register(email, passwordCoding(password));

                if (data.error) {
                    registerError(dispatch, data.error);

                } else {
                    registerSuccess(dispatch, true);

                    console.log('Neko Register Success!', data)
                }
            } catch (e) {
                registerError(dispatch, e.response.data.error);

                console.log('Neko Register Error!', {...e})
            }
        };
