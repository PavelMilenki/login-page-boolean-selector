import React from 'react';
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../../../../main/ui/Routes";
import {useNekoContainerLogic} from "../bll/callbacks/useNekoContainerLogic";
import Neko from "./Neko";
import {FlexColumnCenterCenter} from "../../../../styles/flex-containers";

const NekoContainer = () => {
    const {
        loading, error, success, dispatch,
        name,

        show, setShow,

        redirect, setRedirect,

        logout,
    } = useNekoContainerLogic();

    // redirect logic
    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    console.log('render NekoContainer');
    if (!show) return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
                color: 'orange',
            }}
        >
            Loading...
        </div>
    );

    return (
        <Neko
            loading={loading.value}
            error={error.data.message || ''}

            name={name}

            logoutCallback={logout}
        />
    );
};

export default NekoContainer;
