import React, { useEffect, useState } from 'react';

const WhoWeAre: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="WhoWeAre">
      <div className="WhoWeAre__top">
        <div className="WhoWeAre__top__backgroundImage">
          <div className="container">
            <h2 className="WhoWeAre__top__backgroundImage__title">
              O Que Nos <span className="WhoWeAre__top__backgroundImage__title__inline">Move</span> ?
            </h2>
            <p className="WhoWeAre__top__backgroundImage__text">
              "Na tecnologia, os maiores avanços surgem quando enfrentamos os desafios mais difíceis. É nos momentos de superação que descobrimos nosso verdadeiro potencial!"
            </p>
          </div>
        </div>
      </div>

      <div className="WhoWeAre__bottom">
        <div className="WhoWeAre__bottom__backgroundColor">
          <div
            className={`WhoWeAre__bottom__backgroundColor__gradient WhoWeAre__bottom__backgroundColor__gradient--1 ${
              backgroundIndex === 0 ? 'active' : ''
            }`}
          ></div>
          <div
            className={`WhoWeAre__bottom__backgroundColor__gradient WhoWeAre__bottom__backgroundColor__gradient--2 ${
              backgroundIndex === 1 ? 'active' : ''
            }`}
          ></div>
          <div
            className={`WhoWeAre__bottom__backgroundColor__gradient WhoWeAre__bottom__backgroundColor__gradient--3 ${
              backgroundIndex === 2 ? 'active' : ''
            }`}
          ></div>
          <div className="container">
            <div className="WhoWeAre__bottom__backgroundColor__content">
              <div className="WhoWeAre__bottom__backgroundColor__content__box">
                <h3 className="WhoWeAre__bottom__backgroundColor__content__box__title">Missão</h3>
                <p className="WhoWeAre__bottom__backgroundColor__content__box__text">
                  Nossa missão é transformar ideias em soluções tecnológicas inovadoras, impulsionando o sucesso dos nossos clientes através da excelência em desenvolvimento de software.
                </p>
              </div>

              <div className="WhoWeAre__bottom__backgroundColor__content__box--right">
                <h3 className="WhoWeAre__bottom__backgroundColor__content__box__title">Missão</h3>
                <p className="WhoWeAre__bottom__backgroundColor__content__box__text">
                  Nossa missão é transformar ideias em soluções tecnológicas inovadoras, impulsionando o sucesso dos nossos clientes através da excelência em desenvolvimento de software.
                </p>
              </div>

              <div className="WhoWeAre__bottom__backgroundColor__content__box">
                <h3 className="WhoWeAre__bottom__backgroundColor__content__box__title">Missão</h3>
                <p className="WhoWeAre__bottom__backgroundColor__content__box__text">
                  Nossa missão é transformar ideias em soluções tecnológicas inovadoras, impulsionando o sucesso dos nossos clientes através da excelência em desenvolvimento de software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;