import React from 'react';
import {Redirect} from "react-router-dom";
import {NEKO_PATH} from "../../../../main/ui/Routes";
import {signInClear} from "../bll/callbacks/signInBooleanCallbacks";
import {useSignInContainerLogic} from "../bll/callbacks/useSignInContainerLogic";
import SignIn from "./SignIn";
import Disconnect from "./Disconnect";

const SignInContainer= () => {
    const {
        loading, error, success, dispatch,
        nekoSuccess, nekoLoading,

        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,

        signIn,
    } = useSignInContainerLogic();

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => signInClear(dispatch), 500);
        return <Redirect to={NEKO_PATH}/>;
    }

    console.log('render SignInContainer');
    if (nekoSuccess.value) return <Disconnect/>;

    return (
        <SignIn
            loading={loading.value || nekoLoading.value}
            error={error.data.message || ''}
            success={success.value}

            email={email} setEmailCallback={setEmailCallback}
            password={password} setPasswordCallback={setPasswordCallback}
            rememberMe={rememberMe} setRememberMeCallback={setRememberMeCallback}

            signInCallback={signIn}
        />
    );
};

export default SignInContainer;
