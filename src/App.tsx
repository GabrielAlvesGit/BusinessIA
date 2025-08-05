import React from 'react';
import './styles/scss/App.scss';
import Header from './components/global/Header';
import Home from './page-template/Home/Home';
import AuthPage from './page-template/Login/AuthPage';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Home />
            <AuthPage />
        </>
    );
};

export default App;