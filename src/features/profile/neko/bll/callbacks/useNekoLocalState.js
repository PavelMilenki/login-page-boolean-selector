import {useState} from "react";


export const useNekoLocalState = (dispatch) => {
    const [show, setShow] = useState(false);

    const [redirect, setRedirect] = useState(false);

    return {
        show, setShow,

        redirect, setRedirect,
    }
};
