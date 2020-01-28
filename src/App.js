import React from 'react';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./main/bll/store";
import Main from "./main/ui/Main";

// add context
const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
};

export default App;
