import React from 'react';
import './styles/scss/App.scss';
import Header from './components/global/Header';
import Home from './page-template/Home/Home';
import AuthPage from './page-template/Login/AuthPage';

// 2 - Reaproveitamento  de estrutura 
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default App;