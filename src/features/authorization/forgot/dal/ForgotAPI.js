import { instance } from "../../../../base-url";



export const ForgotAPI = {
    forgot: async (email) => {
        const response = await instance.post('/auth/forgot', {email});
        return response.data;
    },

};
