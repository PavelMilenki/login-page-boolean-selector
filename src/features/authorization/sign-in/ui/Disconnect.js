import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FlexColumnCenterCenter} from "../../../../styles/flex-containers";
import {NEKO_PATH} from "../../../../main/ui/Routes";
import {logoutCallback} from "../../../profile/neko/bll/callbacks/nekoCallBacks";



const Disconnect = () => {
    const dispatch = useDispatch();

    console.log('render Disconnect');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            <button onClick={logoutCallback(dispatch)}>logout</button>
            <NavLink to={NEKO_PATH}>Neko Profile</NavLink>
        </div>
    )
};

export default Disconnect;
