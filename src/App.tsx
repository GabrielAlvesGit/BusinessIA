import React from 'react';
import './styles/scss/App.scss';
import Header from './components/global/Header';
import Home from './page-template/Home/Home';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Home />
        </>
    );
};

export default App;