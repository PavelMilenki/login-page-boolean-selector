import {ForgotAPI} from "../dal/ForgotAPI";
import {forgotError, forgotLoading, forgotSuccess} from "./callbacks/forgotBooleanCallbacks";



export const forgot = (email) => async (dispatch, getStore) => {

        forgotLoading(dispatch, true);

        try {
            const data = await ForgotAPI.forgot(email);

            if (data.error) {
                forgotError(dispatch, data.error);

            } else {
                forgotSuccess(dispatch, true);

                console.log('Neko Forgot Success!', data)
            }
        } catch (e) {
            forgotError(dispatch, e.response.data.error);

            console.log('Neko Forgot Error!', {...e})
        }
    };
