import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={'app_wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app_wrapper_content'}>
                    <Routes>
                        <Route path={'/profile'} Component={Profile}></Route>
                        <Route path={'/dialogs'} Component={Dialogs}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
