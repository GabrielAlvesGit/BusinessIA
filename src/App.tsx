import React from 'react';
import './styles/scss/App.scss';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

// 2 - Reaproveitamento  de estrutura 
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
};

export default App;