import React from 'react';
import Nav from '../../components/global/Nav';
import  { Link } from 'react-router-dom';

import logoBusinessIA from '../../assets/icons/logoBusinessIA.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <article className="header__logo">
                    <Link to="/" className="header__logo__link">BusinessIA</Link>
                    <Link to="/"><img className="header__logo__img" src={logoBusinessIA} alt="BusinessIA" /></Link>
                </article>

                < Nav />
            </div>
        </header>
    )
}

export default Header;
