import React from 'react';
import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">BusinessIA</a>

                <div className="nav__menu">
                    <ul className="nav__menu__list">
                        <li className="nav__menu__list__item">
                            <a className="nav__menu__list__item__link" href="#">Os 3 Porquês
                                <i className="uil uil- nav__icon"></i>
                            </a>

                            <ul className='submenu'>
                                <ul className="submenu__list">
                                    <span className="submenu__list__item__title">Os 3 Porquês</span>
                                    
                                    <li className="submenu__list__item">
                                        <a className="submenu__list__item__link" href="#">
                                            Por que
                                            <span className="submenu__list__item__title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos, delectus soluta praesentium nulla itaque atque vel cupiditate quasi odio molestias iusto numquam dignissimos dolores omnis laboriosam voluptatem mollitia architecto.</span>
                                        </a>
                                    </li>

                                    <li className="submenu__list__item">
                                        <a className="submenu__list__item__link" href="#">
                                            Por que
                                            <span className="submenu__list__item__title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos, delectus soluta praesentium nulla itaque atque vel cupiditate quasi odio molestias iusto numquam dignissimos dolores omnis laboriosam voluptatem mollitia architecto.</span>
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </li>

                        <li className="nav__menu__list__item">
                            <a className="nav__menu__list__item__link" href="#">Plataformas Digitais
                                <i className="uil uil- nav__icon"></i>
                            </a>
                        </li>
                          
                        <li className="nav__menu__list__item">
                            <a className="nav__menu__list__item__link" href="#">Contato
                                <i className="uil uil- nav__icon"></i>
                            </a>
                        </li>

                        <li className="nav__menu__list__item">
                            <a className="nav__menu__list__item__link" href="#">Quem Somos
                                <i className="uil uil- nav__icon"></i>
                            </a>
                        </li>
                    </ul>

                    {/* <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i> */}
                </div>

                <div className="nav__toggle">
                    <i className='bx bx-menu' ></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
