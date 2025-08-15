import React, { useState } from 'react';
import  { Link } from 'react-router-dom';

// import logoBusinessIA from './';

const Nav: React.FC = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        console.log('Menu toggled:', !isMenuOpen);
    };

     const [isAnswerOpen, setAnswerOpen] = useState(false);

    const toggleAnswer = () => {
        setAnswerOpen(!isAnswerOpen);
        console.log('Menu toggled:', !isAnswerOpen);
    };
  
    return (
        <nav className={`nav container ${isMenuOpen ? 'active' : ''}`}>
            <article className="nav__logo">
                <Link to="/" className="nav__logo__link">BusinessIA</Link>
                <img className="nav__logo__img" src="/src/assets/images/arteMobile.png" alt="BusinessIA" />
            </article>

            <div className="nav__menu">
                <ul className="nav__menu__list">
                    <li className="nav__menu__list__item">
                        <Link  className="nav__menu__list__item__link" onClick={toggleAnswer} to="/">
                            <span className={` ${isAnswerOpen ? 'active' : ''}`} >Os 3 Porquês</span>
                        </Link>

                        <div className={`submenu ${isAnswerOpen ? 'submenu--active' : ''}`}>
                            <div className="container">
                                <ul className="submenu__list">
                                    <div className="submenu__list__left">
                                        <span className="submenu__list__left__title"> Os 3 Porquês</span>
                                    </div>
                                    
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
                            </div>
                        </div>
                    </li>

                    <li className="nav__menu__list__item">
                        <Link className="nav__menu__list__item__link" to="#">Plataformas Digitais</Link>
                    </li>
                        
                    <li className="nav__menu__list__item">
                        <Link className="nav__menu__list__item__link" to="#">Contato</Link>
                    </li>

                    <li className="nav__menu__list__item">
                        <Link className="nav__menu__list__item__link" to="#">Quem Somos</Link>
                    </li>
                </ul>

                {/* <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i> */}
            </div>

            <div className="nav__toggle" >
                <i className='bx bx-menu' onClick={toggleMenu}></i>
                <i className="uil uil-times nav__close"></i>
                <img className="" src="/src/assets/icons/logoBusinessIA.png" alt="BusinessIA" />
            </div>
        </nav>
    )
}

export default Nav;
