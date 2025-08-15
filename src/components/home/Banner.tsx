import React from 'react';
import Nav from '../global/Nav';
import  { Link } from 'react-router-dom';

const Banner: React.FC = () => {
    
   return (
      <section className="banner">
        <div className="banner__content">
            <div className="container">
                <div className='banner__content__top'>
                    <h1 className="banner__content__top__title">Business Manager</h1>
                </div>

                <div className="banner__content__bottom">
                    <ul className="banner__content__bottom__list">
                        <li className="banner__content__bottom__list__item">
                            <a className="banner__content__bottom__list__item__link button" href="#">Demo</a>
                        </li>

                        <li className="banner__content__bottom__list__item">
                            <a className="banner__content__bottom__list__item__link button" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-6 h-6 mr-3" data-lov-id="src/pages/Index.tsx:134:16" data-lov-name="Zap" data-component-path="src/pages/Index.tsx" data-component-line="134" data-component-file="Index.tsx" data-component-name="Zap" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20mr-3%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Variables
                            </a>
                        </li>

                        <li className="banner__content__bottom__list__item">
                            <a className="banner__content__bottom__list__item__link button" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-6 h-6 mr-3" data-lov-id="src/pages/Index.tsx:134:16" data-lov-name="Zap" data-component-path="src/pages/Index.tsx" data-component-line="134" data-component-file="Index.tsx" data-component-name="Zap" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20mr-3%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Icon set
                            </a>
                        </li>

                        <li className="banner__content__bottom__list__item">
                            <a className="banner__content__bottom__list__item__link button" href="#">
                                Accessibility True
                            </a>
                        </li>

                        <li className="banner__content__bottom__list__item">
                            <Link className="banner__content__bottom__list__item__link button" to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="banner__left">
                <div className="banner__left__img">
                        < Nav />
                </div>
            </div>
        </div>
      </section>
    );
}

export default Banner;
