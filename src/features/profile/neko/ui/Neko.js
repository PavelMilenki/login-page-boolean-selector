import React from 'react';
import {FlexColumnCenterCenter} from "../../../../styles/flex-containers";



const Neko = (
    {
        loading, error,

        name,

        logoutCallback,
    }
) => {

    console.log('render Neko');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            neko

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : name
                        ? <div style={{color: 'lime'}}>{name}</div>
                        : <div><br/></div>
            }

            <button onClick={logoutCallback} disabled={loading}>logout</button>

        </div>
    );
};

export default Neko;
