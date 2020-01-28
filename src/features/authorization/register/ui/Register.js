import React from 'react';
import {NavLink} from "react-router-dom";
import {FlexColumnCenterCenter} from "../../../../styles/flex-containers";
import {SIGN_IN_PATH} from "../../../../main/ui/Routes";



const Register = (
    {
        loading, error, success,

        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        registerCallback
    }
) => {

    console.log('render Register');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            register

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => setEmailCallback(e.currentTarget.value)}/>
            <input value={password} onChange={e => setPasswordCallback(e.currentTarget.value)} type={'password'}/>
            <input value={password2} onChange={e => setPassword2Callback(e.currentTarget.value)} type={'password'}/>

            <button onClick={registerCallback} disabled={loading || success}>Register</button>

            <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
        </div>
    );
};

export default Register;
