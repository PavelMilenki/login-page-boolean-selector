import {instance} from "../../../../base-url";


export const SignInAPI = {
    signIn: async (email, password, rememberMe) => {
        const response = await instance.post(
            '/auth/login', {email, password, rememberMe});
        return response.data;
    },

};
