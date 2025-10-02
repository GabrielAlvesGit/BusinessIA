import React from 'react';

const FinancialReports: React.FC = () => {
  return (
    <section className="financial-reports">
      <div className="container">
        <div className="financial-reports__header">
          <h2 className="financial-reports__header__title">Financial Reports</h2>
          <div className="financial-reports__header__actions">
            <div className="financial-reports__header__actions__filters">
              <button className="financial-reports__header__actions__filters__button financial-reports__header__actions__filters__button--active">
                Este Mês
              </button>
              <button className="financial-reports__header__actions__filters__button">
                Este Ano
              </button>
              <button className="financial-reports__header__actions__filters__button">
                Período Customizado
              </button>
            </div>
            <button className="financial-reports__header__actions__export">
              <i className='bx bx-download'></i>
              Exportar Relatório
            </button>
          </div>
        </div>

        <div className="financial-reports__stats">
          <div className="financial-reports__stats__box">
            <div className="financial-reports__stats__box__icon">
              <i className='bx bx-dollar'></i>
            </div>
            <div className="financial-reports__stats__box__content">
              <p className="financial-reports__stats__box__content__label">Faturamento Total</p>
              <h3 className="financial-reports__stats__box__content__value">R$ 12.450,00</h3>
              <p className="financial-reports__stats__box__content__change financial-reports__stats__box__content__change--positive">
                <i className='bx bx-trending-up'></i>
                +15.2% em relação ao mês anterior
              </p>
            </div>
          </div>

          <div className="financial-reports__stats__box">
            <div className="financial-reports__stats__box__icon">
              <i className='bx bx-cut'></i>
            </div>
            <div className="financial-reports__stats__box__content">
              <p className="financial-reports__stats__box__content__label">Total de Cortes</p>
              <h3 className="financial-reports__stats__box__content__value">498</h3>
              <p className="financial-reports__stats__box__content__change financial-reports__stats__box__content__change--positive">
                <i className='bx bx-trending-up'></i>
                +8.3% em relação ao mês anterior
              </p>
            </div>
          </div>

          <div className="financial-reports__stats__box">
            <div className="financial-reports__stats__box__icon">
              <i className='bx bx-receipt'></i>
            </div>
            <div className="financial-reports__stats__box__content">
              <p className="financial-reports__stats__box__content__label">Ticket Médio</p>
              <h3 className="financial-reports__stats__box__content__value">R$ 25,00</h3>
              <p className="financial-reports__stats__box__content__change financial-reports__stats__box__content__change--positive">
                <i className='bx bx-trending-up'></i>
                +2.1% em relação ao mês anterior
              </p>
            </div>
          </div>

          <div className="financial-reports__stats__box">
            <div className="financial-reports__stats__box__icon">
              <i className='bx bx-user'></i>
            </div>
            <div className="financial-reports__stats__box__content">
              <p className="financial-reports__stats__box__content__label">Clientes Únicos</p>
              <h3 className="financial-reports__stats__box__content__value">312</h3>
              <p className="financial-reports__stats__box__content__change financial-reports__stats__box__content__change--positive">
                <i className='bx bx-trending-up'></i>
                +12.5% em relação ao mês anterior
              </p>
            </div>
          </div>
        </div>

        <div className="financial-reports__charts">
          <article className="financial-reports__charts__card financial-reports__charts__card--large">
            <div className="financial-reports__charts__card__header">
              <div>
                <h3 className="financial-reports__charts__card__header__title">Faturamento por Dia</h3>
                <p className="financial-reports__charts__card__header__subtitle">Últimos 30 dias</p>
              </div>
              <i className='bx bx-line-chart'></i>
            </div>
            <div className="financial-reports__charts__card__content">
              <div className="financial-reports__charts__card__content__placeholder">
                <i className='bx bx-line-chart'></i>
                <p>Gráfico de faturamento diário</p>
              </div>
            </div>
          </article>

          <article className="financial-reports__charts__card">
            <div className="financial-reports__charts__card__header">
              <div>
                <h3 className="financial-reports__charts__card__header__title">Serviços Mais Populares</h3>
                <p className="financial-reports__charts__card__header__subtitle">Distribuição por tipo de serviço</p>
              </div>
              <i className='bx bx-pie-chart-alt-2'></i>
            </div>
            <div className="financial-reports__charts__card__content">
              <div className="financial-reports__charts__card__content__services">
                <div className="financial-reports__charts__card__content__services__item">
                  <div className="financial-reports__charts__card__content__services__item__info">
                    <span className="financial-reports__charts__card__content__services__item__info__name">Corte Masculino</span>
                    <span className="financial-reports__charts__card__content__services__item__info__percentage">83%</span>
                  </div>
                  <div className="financial-reports__charts__card__content__services__item__bar">
                    <div 
                      className="financial-reports__charts__card__content__services__item__bar__fill"
                      style={{ width: '83%' }}
                    ></div>
                  </div>
                </div>

                <div className="financial-reports__charts__card__content__services__item">
                  <div className="financial-reports__charts__card__content__services__item__info">
                    <span className="financial-reports__charts__card__content__services__item__info__name">Barba</span>
                    <span className="financial-reports__charts__card__content__services__item__info__percentage">67%</span>
                  </div>
                  <div className="financial-reports__charts__card__content__services__item__bar">
                    <div 
                      className="financial-reports__charts__card__content__services__item__bar__fill"
                      style={{ width: '67%' }}
                    ></div>
                  </div>
                </div>

                <div className="financial-reports__charts__card__content__services__item">
                  <div className="financial-reports__charts__card__content__services__item__info">
                    <span className="financial-reports__charts__card__content__services__item__info__name">Corte + Barba</span>
                    <span className="financial-reports__charts__card__content__services__item__info__percentage">50%</span>
                  </div>
                  <div className="financial-reports__charts__card__content__services__item__bar">
                    <div 
                      className="financial-reports__charts__card__content__services__item__bar__fill"
                      style={{ width: '50%' }}
                    ></div>
                  </div>
                </div>

                <div className="financial-reports__charts__card__content__services__item">
                  <div className="financial-reports__charts__card__content__services__item__info">
                    <span className="financial-reports__charts__card__content__services__item__info__name">Outros</span>
                    <span className="financial-reports__charts__card__content__services__item__info__percentage">25%</span>
                  </div>
                  <div className="financial-reports__charts__card__content__services__item__bar">
                    <div 
                      className="financial-reports__charts__card__content__services__item__bar__fill"
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="financial-reports__performance">
          <div className="financial-reports__performance__header">
            <div>
              <h3 className="financial-reports__performance__header__title">Desempenho por Funcionário</h3>
              <p className="financial-reports__performance__header__subtitle">Ranking mensal dos funcionários</p>
            </div>
            <i className='bx bx-trophy'></i>
          </div>

          <div className="financial-reports__performance__table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Funcionário</th>
                  <th>Cortes</th>
                  <th>Faturamento</th>
                  <th>Comissão</th>
                </tr>
              </thead>
              <tbody>
                <tr className="financial-reports__performance__table__row">
                  <td className="financial-reports__performance__table__row__rank">
                    <span className="financial-reports__performance__table__row__rank__badge financial-reports__performance__table__row__rank__badge--gold">1</span>
                  </td>
                  <td className="financial-reports__performance__table__row__employee">
                    <div className="financial-reports__performance__table__row__employee__avatar">CS</div>
                    <span className="financial-reports__performance__table__row__employee__name">Carlos Silva</span>
                  </td>
                  <td className="financial-reports__performance__table__row__cuts">156 cortes</td>
                  <td className="financial-reports__performance__table__row__revenue">R$ 4.680,00</td>
                  <td className="financial-reports__performance__table__row__commission">R$ 1.872,00</td>
                </tr>

                <tr className="financial-reports__performance__table__row">
                  <td className="financial-reports__performance__table__row__rank">
                    <span className="financial-reports__performance__table__row__rank__badge financial-reports__performance__table__row__rank__badge--silver">2</span>
                  </td>
                  <td className="financial-reports__performance__table__row__employee">
                    <div className="financial-reports__performance__table__row__employee__avatar">MS</div>
                    <span className="financial-reports__performance__table__row__employee__name">Maria Santos</span>
                  </td>
                  <td className="financial-reports__performance__table__row__cuts">134 cortes</td>
                  <td className="financial-reports__performance__table__row__revenue">R$ 4.020,00</td>
                  <td className="financial-reports__performance__table__row__commission">R$ 1.407,00</td>
                </tr>

                <tr className="financial-reports__performance__table__row">
                  <td className="financial-reports__performance__table__row__rank">
                    <span className="financial-reports__performance__table__row__rank__badge financial-reports__performance__table__row__rank__badge--bronze">3</span>
                  </td>
                  <td className="financial-reports__performance__table__row__employee">
                    <div className="financial-reports__performance__table__row__employee__avatar">RL</div>
                    <span className="financial-reports__performance__table__row__employee__name">Roberto Lima</span>
                  </td>
                  <td className="financial-reports__performance__table__row__cuts">118 cortes</td>
                  <td className="financial-reports__performance__table__row__revenue">R$ 3.540,00</td>
                  <td className="financial-reports__performance__table__row__commission">R$ 1.239,00</td>
                </tr>

                <tr className="financial-reports__performance__table__row">
                  <td className="financial-reports__performance__table__row__rank">
                    <span className="financial-reports__performance__table__row__rank__badge">4</span>
                  </td>
                  <td className="financial-reports__performance__table__row__employee">
                    <div className="financial-reports__performance__table__row__employee__avatar">AC</div>
                    <span className="financial-reports__performance__table__row__employee__name">Ana Costa</span>
                  </td>
                  <td className="financial-reports__performance__table__row__cuts">90 cortes</td>
                  <td className="financial-reports__performance__table__row__revenue">R$ 2.700,00</td>
                  <td className="financial-reports__performance__table__row__commission">R$ 810,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialReports;