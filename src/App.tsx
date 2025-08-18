import React from 'react';
// 2 - Reaproveitamento  de estrutura 
import { Outlet, useLocation } from 'react-router-dom';

import './styles/scss/App.scss';
import Header from './components/global/Header';
import Footer from './components/global/Footer';


const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Header />
                <Outlet />
                {location.pathname !== '/login' && <Footer />}
        </>
    );
};

export default App;