import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoBusinessIA from '../../assets/icons/logoBusinessIA.png';

const Nav: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (menuName: string) => {
        setActiveSubmenu((prev) => (prev === menuName ? null : menuName));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveSubmenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="nav" ref={navRef}>
            <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav__menu__list">
                    {/* Item 1 */}
                    <li className="nav__menu__list__item">
                        <Link
                            className="nav__menu__list__item__link"
                            onClick={() => toggleSubmenu('porques')}
                            to="#"
                        >
                            <span className={`${activeSubmenu === 'porques' ? 'active' : ''}`}>
                                Os 3 Porquês
                            </span>
                        </Link>

                        <div className={`submenu ${activeSubmenu === 'porques' ? 'submenu--active' : ''}`}>
                            <div className="container">
                                <ul className="submenu__list">
                                    <div className="submenu__list__left">
                                        <span className="submenu__list__left__title">Os 3 Porquês</span>
                                    </div>

                                    <ul className="submenu__list">
                                        <ul className="submenu__list__right">
                                            <li className="submenu__list__right__item">
                                                <Link className="submenu__list__right__item__link" to="#">Por que</Link>
                                                <p className="submenu__list__right__item__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos, delectus soluta praesentium nulla itaque atque vel cupiditate quasi odio molestias iusto numquam dignissimos dolores omnis laboriosam voluptatem mollitia architecto.</p>
                                            </li>

                                            <li className="submenu__list__right__item">
                                                <Link className="submenu__list__right__item__link" to="#">Por que</Link>
                                                <p className="submenu__list__right__item__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos, delectus soluta praesentium nulla itaque atque vel cupiditate quasi odio molestias iusto numquam dignissimos dolores omnis laboriosam voluptatem mollitia architecto.</p>
                                            </li>

                                            <li className="submenu__list__right__item">
                                                <Link className="submenu__list__right__item__link" to="#">Por que</Link>
                                                <p className="submenu__list__right__item__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos, delectus soluta praesentium nulla itaque atque vel cupiditate quasi odio molestias iusto numquam dignissimos dolores omnis laboriosam voluptatem mollitia architecto.</p>
                                            </li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Item 2 */}
                    <li className="nav__menu__list__item">
                        <Link
                            className="nav__menu__list__item__link"
                            onClick={() => toggleSubmenu('plataformas')}
                            to="#"
                        >
                            <span className={`${activeSubmenu === 'plataformas' ? 'active' : ''}`}>
                                <i className='bx bx-grid-alt'></i> Plataformas Digitais
                            </span>
                        </Link>

                        <div className={`submenu ${activeSubmenu === 'plataformas' ? 'submenu--active' : ''}`}>
                            <div className="container">
                                <ul className="submenu__list">
                                    <div className="submenu__list__left">
                                        <span className="submenu__list__left__title">Gestão<br /> Completa</span>
                                    </div>

                                    <ul className="submenu__list__right">
                                        <li className="submenu__list__right__item">
                                            <Link to="" className="submenu__list__right__item__link">
                                                <i className='bx bx-chart-line'></i>
                                                <div>
                                                    <strong>Dashboard</strong>
                                                    <p className="submenu__list__right__item__text">Visão geral do seu negócio<br /> em tempo real</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="submenu__list__right__item">
                                            <Link to="" className="submenu__list__right__item__link">
                                                <i className='bx bx-bar-chart-alt-2'></i>
                                                <div>
                                                    <strong>Relatórios</strong>
                                                    <p className="submenu__list__right__item__text"><i className='bx bx-brain'></i>
                                                        Inteligência Artificial<br />
                                                        Análises inteligentes e insights</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="submenu__list__right__item">
                                            <Link to="" className="submenu__list__right__item__link">
                                                <i className='bx bx-trending-up'></i>
                                                <div>
                                                    <strong>Previsões</strong>
                                                    <p className="submenu__list__right__item__text">Projeções de faturamento e demanda</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="submenu__list__right__item--box">
                                            <Link to="/dashboard" className="submenu__list__right__item__link--acesso">
                                                <i className='bx bx-rocket'></i>
                                                <div>
                                                    <strong>Conheça nossa Dashboard</strong>
                                                    <p className="submenu__list__right__item__text">click aqui</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="nav__menu__list__item">
                        <Link className="nav__menu__list__item__link" to="#">
                            Contato
                        </Link>
                    </li>

                    <li className="nav__menu__list__item">
                        <Link className="nav__menu__list__item__link" to="#">
                            Quem Somos
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={`nav__toggle ${isMenuOpen ? 'nav__toggle--active' : ''}`}>
                <i className={`uil uil-times ${isMenuOpen ? '' : 'uil-times--active'}`} onClick={toggleMenu}></i>
                <i className={`bx bx-menu ${isMenuOpen ? 'bx-menu--active' : ''}`} onClick={toggleMenu}></i>
                <img src={logoBusinessIA} alt="BusinessIA" />
            </div>
        </nav>
    );
};

export default Nav;
