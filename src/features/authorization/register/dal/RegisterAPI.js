import {instance} from "../../../../base-url";



export const RegisterAPI = {
    register: async (email, password) => {
        const response = await instance.post('/auth/register', {email, password});
        return response.data;
    },

};
