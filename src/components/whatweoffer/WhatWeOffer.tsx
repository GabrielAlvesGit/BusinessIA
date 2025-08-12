import React, { useState } from 'react';
import { whatWeOfferData } from './Data';

const WhatWeOffer: React.FC = () => {
  const [activePlan, setActivePlan] = useState(whatWeOfferData[0].name);

  return (
    <section className="whatWeOffer">
      <div className="container">
        <h2 className="whatWeOffer__title">
          O que Oferecemos <strong className="whatWeOffer__title_">?</strong>
        </h2>
        <div className="whatWeOffer__bottom">
          <div className="whatWeOffer__bottom__left">
            {whatWeOfferData.map((item, index) => {
              const activeIndex = whatWeOfferData.findIndex((p) => p.name === activePlan);
              const isNeighbor = (activeIndex === 1 && (index === 0 || index === 2)) || (activeIndex === 2 && (index === 1 || index === 2));
              return (
                <div
                  key={item.name}
                  className={`whatWeOffer__bottom__left__option ${
                    activePlan === item.name ? 'whatWeOffer__bottom__left__option--active' : ''
                  } ${isNeighbor ? 'whatWeOffer__bottom__left__option--neighbor' : ''} whatWeOffer__bottom__left__option--${item.color}`}
                  onClick={() => setActivePlan(item.name)}
                >
                  <div className="whatWeOffer__bottom__left__option__inner">
                    <p className="whatWeOffer__bottom__left__option__title">{item.name}</p>
                    <p className="whatWeOffer__bottom__left__option__range">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="whatWeOffer__bottom__right">
            {whatWeOfferData.map((item) => (
              activePlan === item.name && (
                <div
                  key={item.name}
                  className={`whatWeOffer__bottom__right__contents whatWeOffer__bottom__right__contents--${item.active}`}
                >
                  <div className="whatWeOffer__bottom__right__contents__content">
                    <p
                      className={`whatWeOffer__bottom__right__contents__content__text whatWeOffer__bottom__right__contents__content__text--${item.color}`}
                    >
                      {item.name}
                    </p>
                    {item.benefits && (
                      <ul className="whatWeOffer__bottom__right__contents__content__list">
                        {item.benefits.map((benefit, index) => (
                          <li key={index} className="whatWeOffer__bottom__right__contents__content__list__item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="whatWeOffer__bottom__right__contents__content__list__item__icon"
                            >
                              <path d="M9 11l3 3l8 -8"></path>
                              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
                            </svg>
                            <p className="whatWeOffer__bottom__right__contents__content__list__item__text">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                    {(item.titleDifferential || item.differentials) && (
                      <div className="whatWeOffer__bottom__right__contents__content__boxText">
                        <p className="whatWeOffer__bottom__right__contents__content__boxText__title">
                          {item.titleDifferential}
                        </p>
                        <ul className="whatWeOffer__bottom__right__contents__content__boxText__list">
                          {( item.differentials || []).map((item, index) => (
                            <li key={index} className="whatWeOffer__bottom__right__contents__content__boxText__list__item">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="whatWeOffer__bottom__right__contents__content__buttons">
                      <a
                        href="/investidor"
                        className={`whatWeOffer__bottom__right__contents__content__buttons__button whatWeOffer__bottom__right__contents__content__buttons__button--primary--${item.color}`}
                      >
                        Saiba mais
                      </a>
                      <a
                        href="https://cadastro.ativainvestimentos.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`whatWeOffer__bottom__right__contents__content__buttons__button whatWeOffer__bottom__right__contents__content__buttons__button--secondary--${item.color}`}
                      >
                        Abra sua Conta
                      </a>
                    </div>
                  </div>
                  <div className="whatWeOffer__bottom__right__contents__image">
                    <img
                      src={`${item.image}`}
                      alt={item.description}
                      className="whatWeOffer__bottom__right__contents__image__img"
                    />
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;