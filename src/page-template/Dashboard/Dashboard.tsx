import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
        <div className="container">
            <div className="dashboard__top">
                <div className="dashboard__top__boxs">
                    <div className="dashboard__top__boxs__box">
                        <h3 className="dashboard__top__boxs__box__title">Total Sales <i className="bxr  bx-dollar"  ></i> </h3>
                        <p className="dashboard__top__boxs__box__number">$25,000</p>
                        <p className="dashboard__top__boxs__box__description">+20.1% em relação a ontem</p>
                    </div>

                    <div className="dashboard__top__boxs__box">
                        <h3 className="dashboard__top__boxs__box__title">Cortes Hoje <i className='bxr  bx-cut'  ></i></h3>
                        <p className="dashboard__top__boxs__box__number">18</p>
                        <p className="dashboard__top__boxs__box__description">+5 em relação a ontem</p>
                    </div>

                    <div className="dashboard__top__boxs__box">
                        <h3 className="dashboard__top__boxs__box__title">Funcionários Ativos  <i className='bxr  bx-group'></i></h3>
                        <p className="dashboard__top__boxs__box__number">4</p>
                        <p className="dashboard__top__boxs__box__description">Todos trabalhando hoje</p>
                    </div>

                    <div className="dashboard__top__boxs__box">
                        <h3 className="dashboard__top__boxs__box__title">Meta Mensal  <i className='bxr  bx-trending-up'></i></h3>
                        <p className="dashboard__top__boxs__box__number">75%</p>
                        <p className="dashboard__top__boxs__box__description">R$ 7.500 de R$ 10.000</p>
                    </div>
                </div>
            </div>

            <div className="dashboard__center">
                <div className="dashboard__center__boxs">
                    <article className="dashboard__center__boxs__box">
                        <h3 className="dashboard__center__boxs__box__title"><i className="bxr  bx-calendar-alt"></i>  Cortes Recentes</h3>
                        <p className="dashboard__center__boxs__box__description">Gerencie os horários e agendamentos</p>
                        <button className="dashboard__center__boxs__box__button">Ver Agenda</button>
                    </article>

                    <article className="dashboard__center__boxs__box">
                        <h3 className="dashboard__center__boxs__box__title"><i className="bxr  bx-group"></i> Funcionários</h3>
                        <p className="dashboard__center__boxs__box__description">Gerencie sua equipe e desempenho</p>
                        <button className="dashboard__center__boxs__box__button">Gerenciar Equipe</button>
                    </article>

                    <article className="dashboard__center__boxs__box">
                        <h3 className="dashboard__center__boxs__box__title"><i className="bxr  bx-chart-trend"></i> Relatórios</h3>
                        <p className="dashboard__center__boxs__box__description">Analise o desempenho financeiro</p>
                        <button className="dashboard__center__boxs__box__button">Ver Relatórios</button>
                    </article>
                </div>
            </div>

            <div className="dashboard__bottom">
                <div className="dashboard__bottom__content">
                    <h3 className="dashboard__bottom__content__title">Atividade Recente</h3>
                    <p className="dashboard__bottom__content__subtitle">Últimas transações e atividades da barbearia</p>
                </div>

                <div className="dashboard__bottom__activities">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Por: </th>
                                <th scope="col">Valor:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Corte + Barba - João Silva <br /> Por: Carlos (Barbeiro)</th>
                                <th scope="row">R$ 35,00 <br /> 14:30</th>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row">Lorem</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Dashboard;