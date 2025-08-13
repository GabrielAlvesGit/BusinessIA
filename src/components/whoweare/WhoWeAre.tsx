import React, { useState } from 'react';

const WhoWeAre: React.FC = () => {

    return (
        <section className="WhoWeAre">
            <div className="WhoWeAre__top">
                <div className="WhoWeAre__top__backgroundImage">
                    <div className="container">
                        <h2 className="WhoWeAre__top__backgroundImage__title">
                            O Que Nos <span className="WhoWeAre__top__backgroundImage__title__inline">Move</span>  ?
                        </h2>
                        <p className="WhoWeAre__top__backgroundImage__text">"Na tecnologia, os maiores avanços surgem quando enfrentamos os desafios mais difíceis. É nos momentos de superação que descobrimos nosso verdadeiro potencial!"</p>
                    </div>
                </div>

                {/* Para o futuro*/}
                {/* <aside className="WhoWeAre__top__aside">

                </aside> */}
            </div>

            <div className="WhoWeAre__bottom">
                <div className="WhoWeAre__top_">
                    
                </div>

                {/* Para o futuro*/}
                {/* <aside className="WhoWeAre__top__aside">

                </aside> */}
            </div>
        </section>
    );
};

export default WhoWeAre;