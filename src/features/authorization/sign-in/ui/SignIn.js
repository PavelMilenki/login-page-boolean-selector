import React from 'react';
import {NavLink} from "react-router-dom";
import {FlexColumnCenterCenter} from "../../../../styles/flex-containers";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../main/ui/Routes";



const SignIn = (
    {
        loading, error, success,

        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        signInCallback
    }
) => {

    console.log('render SignIn');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            sign-in

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

            <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>

            <div>
                <label>
                    <input
                        type={'checkbox'}
                        checked={rememberMe}
                        onChange={e => setRememberMeCallback(e.currentTarget.checked)}
                    />
                    Remember Me
                </label>
            </div>

            <button onClick={signInCallback} disabled={loading || success}>Sign In</button>

            <NavLink to={REGISTER_PATH}>Registration</NavLink>
        </div>
    );
};

export default SignIn;
