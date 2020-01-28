import {instance} from "../../../../base-url";



export const NekoAPI = {
    getMe: async (token) => {
        const response = await instance.post('/auth/me', {token});
        return response.data;
    },

};
