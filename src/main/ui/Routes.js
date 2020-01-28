import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../features/authorization/sign-in/ui/SignInPage';
import RegisterPage from '../../features/authorization/register/ui/RegisterPage';
import ForgotPage from '../../features/authorization/forgot/ui/ForgotPage';
import NekoPage from "../../features/profile/neko/ui/NekoPage";


// all project paths
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';

export const NEKO_PATH = '/neko'; // profile

export const TEST_MODALS_PATH = '/test-modals';
export const TEST_TIME_PATH = '/test-time';
export const TEST_COLOR_PATH = '/test-color';

const Routes = () => {
    return (
        <>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>

            <Route path={NEKO_PATH} render={() => <NekoPage/>}/>


        </>
    );
};

export default Routes;
