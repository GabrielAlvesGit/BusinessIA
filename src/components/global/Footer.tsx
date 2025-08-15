import React, { useState } from 'react';
import  { Link } from 'react-router-dom';
import { faqItems } from './FaqItems';

const Footer: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__top__left"> 
                        <div className="footer__top__left__logo">
                            <Link to="/" className="footer__top__left_logo__link">
                                <img className="footer__top__left_logo__link__img" src="/src/assets/icons/logoBusinessIA.png" alt="BusinessIA Logo" />
                            </Link>
                        </div>

                        <address className="footer__top__left__address">
                            <h3 className="footer__top__left__address__title">Fale Conosco</h3>
                            <p className="footer__top__left__address__text">Email:<a className="footer__top__left__address__text__link" href="mailto:Contato@hotmail.com"> Contato@hotmail.com<i className="bx bxs-envelope isEmail"></i></a></p>
                            <p className="footer__top__left__address__text">Telefone: <a className="footer__top__left__address__text__link" href="tel:+1234567890"> (11) 97806-4552<i className="bx bxl-whatsapp isWhatsApp"> </i></a></p>
                            <p className="footer__top__left__address__text">Chat On<i className="bx bxs-message-dots isMessage"></i></p>
                        </address>
                    </div>

                    <div className="footer__top__right">
                        <div className="footer__top__right__accordion">
                            <div className="footer__top__right__accordion__content">
                            <h4 className="footer__top__right__accordion__content__title">FAQ</h4>
                            <ul className="footer__top__right__accordion__content__list">
                                {faqItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`footer__top__right__accordion__content__list__item ${activeIndex === index ? 'showAnswer' : ''}`}
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <div className="footer__top__right__accordion__content__list__arrow">
                                    <span className="footer__top__right__accordion__content__list__arrow__question">
                                        {item.question}
                                    </span>
                                    <i className="bx bxs-chevron-down arrow"></i>
                                    </div>
                                    <p>{item.answer}</p>
                                    <span className="line"></span>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer__top__navigation">
                        <ul className="footer__top__navigation__left">
                            <h4 className="footer__top__navigation__left__title">Empresa</h4>
                            <li className="footer__top__navigation__left__item"><Link className="footer__top__navigation__left__item__link" to="/sobre">Lorem</Link></li>
                            <li className="footer__top__navigation__left__item"><Link className="footer__top__navigation__left__item__link" to="/sobre">Lorem</Link></li>
                            <li className="footer__top__navigation__left__item"><Link className="footer__top__navigation__left__item__link" to="/sobre">Lorem</Link></li>
                        </ul>

                        <ul className="footer__top__navigation__right">
                            <h4 className="footer__top__navigation__right__title">Empresa</h4>
                            <li className="footer__top__navigation__right__item"><Link className="footer__top__navigation__right__item__link" to="/sobre">Lorem</Link></li>
                            <li className="footer__top__navigation__right__item"><Link className="footer__top__navigation__right__item__link" to="/sobre">Lorem</Link></li>
                            <li className="footer__top__navigation__right__item"><Link className="footer__top__navigation__right__item__link" to="/sobre">Lorem</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <article className="footer__bottom__socialMedia">
                        <ul className="footer__bottom__socialMedia__list">
                            <li className="footer__bottom__socialMedia__list__item"><Link className="footer__bottom__socialMedia__list__item__link" to=""><i className="bx bxl-instagram-alt isInstagram"></i></Link></li>
                            <li className="footer__bottom__socialMedia__list__item"><Link className="footer__bottom__socialMedia__list__item__link" to=""><i className="bx bxl-linkedin-square isLinkedIn"></i></Link></li>
                        </ul>
                    </article>

                    <div className="footer__bottom__copy">
                        <p className="footer__bottom__copy__text">Cospanyright © 2025 - <span>B</span>usiness<span>I.A</span></p>    
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
