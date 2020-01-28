import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../features/authorization/sign-in/bll/redux/signInReducer";
import {registerReducer} from "../../features/authorization/register/bll/redux/registerReducer";
import {forgotReducer} from "../../features/authorization/forgot/bll/redux/forgotReducer";
import {nekoReducer} from "../../features/profile/neko/bll/redux/nekoReducer";
import {booleanReducer} from "../../features/common/boolean-reducer/booleanReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,

    booleans: booleanReducer,

    neko: nekoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

window.store = store; // for dev
