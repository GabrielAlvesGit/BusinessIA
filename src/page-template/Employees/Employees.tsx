import React from 'react';

const Employees: React.FC = () => {
  return (
    <section className="employees">
      <div className="container">
        <div className="employees__header">
          <div className="employees__header__search">
            <i className='bx bx-search'></i>
            <input 
              type="text" 
              placeholder="Buscar funcionário..."
              className="employees__header__search__input"
            />
          </div>
          <button className="employees__header__button">
            <i className='bx bx-plus'></i>
            Adicionar Funcionário
          </button>
        </div>

        <div className="employees__stats">
          <div className="employees__stats__box">
            <h3 className="employees__stats__box__title">
              Total de Funcionários
              <i className='bx bx-group'></i>
            </h3>
            <p className="employees__stats__box__number">4</p>
            <p className="employees__stats__box__description">3 ativos hoje</p>
          </div>

          <div className="employees__stats__box">
            <h3 className="employees__stats__box__title">
              Cortes Hoje
              <i className='bx bx-cut'></i>
            </h3>
            <p className="employees__stats__box__number">18</p>
            <p className="employees__stats__box__description">Total da equipe</p>
          </div>

          <div className="employees__stats__box">
            <h3 className="employees__stats__box__title">
              Faturamento da Equipe
              <i className='bx bx-dollar'></i>
            </h3>
            <p className="employees__stats__box__number">R$ 540,00</p>
            <p className="employees__stats__box__description">Faturamento hoje</p>
          </div>
        </div>

        <div className="employees__grid">
          <article className="employees__grid__card">
            <div className="employees__grid__card__header">
              <div className="employees__grid__card__header__avatar">CS</div>
              <div className="employees__grid__card__header__info">
                <h4 className="employees__grid__card__header__info__name">Carlos Silva</h4>
                <p className="employees__grid__card__header__info__role">Barbeiro Senior</p>
              </div>
              <span className="employees__grid__card__header__badge employees__grid__card__header__badge--active">
                Ativo
              </span>
            </div>

            <div className="employees__grid__card__stats">
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">8</span>
                <span className="employees__grid__card__stats__item__label">Cortes hoje</span>
              </div>
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">240</span>
                <span className="employees__grid__card__stats__item__label">Faturamento</span>
              </div>
            </div>

            <div className="employees__grid__card__details">
              <p className="employees__grid__card__details__item">
                <i className='bx bx-phone'></i>
                Telefone: (11) 99999-1234
              </p>
              <p className="employees__grid__card__details__item">
                <i className='bx bx-wallet'></i>
                Comissão: 40%
              </p>
            </div>

            <div className="employees__grid__card__actions">
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--primary">
                <i className='bx bx-edit'></i>
                Editar
              </button>
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--secondary">
                <i className='bx bx-bar-chart-alt-2'></i>
                Relatório
              </button>
            </div>
          </article>

          <article className="employees__grid__card">
            <div className="employees__grid__card__header">
              <div className="employees__grid__card__header__avatar">MS</div>
              <div className="employees__grid__card__header__info">
                <h4 className="employees__grid__card__header__info__name">Maria Santos</h4>
                <p className="employees__grid__card__header__info__role">Barbeira</p>
              </div>
              <span className="employees__grid__card__header__badge employees__grid__card__header__badge--active">
                Ativo
              </span>
            </div>

            <div className="employees__grid__card__stats">
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">6</span>
                <span className="employees__grid__card__stats__item__label">Cortes hoje</span>
              </div>
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">180</span>
                <span className="employees__grid__card__stats__item__label">Faturamento</span>
              </div>
            </div>

            <div className="employees__grid__card__details">
              <p className="employees__grid__card__details__item">
                <i className='bx bx-phone'></i>
                Telefone: (11) 99999-5678
              </p>
              <p className="employees__grid__card__details__item">
                <i className='bx bx-wallet'></i>
                Comissão: 35%
              </p>
            </div>

            <div className="employees__grid__card__actions">
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--primary">
                <i className='bx bx-edit'></i>
                Editar
              </button>
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--secondary">
                <i className='bx bx-bar-chart-alt-2'></i>
                Relatório
              </button>
            </div>
          </article>

          <article className="employees__grid__card">
            <div className="employees__grid__card__header">
              <div className="employees__grid__card__header__avatar">RL</div>
              <div className="employees__grid__card__header__info">
                <h4 className="employees__grid__card__header__info__name">Roberto Lima</h4>
                <p className="employees__grid__card__header__info__role">Barbeiro</p>
              </div>
              <span className="employees__grid__card__header__badge employees__grid__card__header__badge--active">
                Ativo
              </span>
            </div>

            <div className="employees__grid__card__stats">
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">4</span>
                <span className="employees__grid__card__stats__item__label">Cortes hoje</span>
              </div>
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">120</span>
                <span className="employees__grid__card__stats__item__label">Faturamento</span>
              </div>
            </div>

            <div className="employees__grid__card__details">
              <p className="employees__grid__card__details__item">
                <i className='bx bx-phone'></i>
                Telefone: (11) 99999-9012
              </p>
              <p className="employees__grid__card__details__item">
                <i className='bx bx-wallet'></i>
                Comissão: 35%
              </p>
            </div>

            <div className="employees__grid__card__actions">
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--primary">
                <i className='bx bx-edit'></i>
                Editar
              </button>
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--secondary">
                <i className='bx bx-bar-chart-alt-2'></i>
                Relatório
              </button>
            </div>
          </article>

          <article className="employees__grid__card">
            <div className="employees__grid__card__header">
              <div className="employees__grid__card__header__avatar">AC</div>
              <div className="employees__grid__card__header__info">
                <h4 className="employees__grid__card__header__info__name">Ana Costa</h4>
                <p className="employees__grid__card__header__info__role">Esteticista</p>
              </div>
              <span className="employees__grid__card__header__badge employees__grid__card__header__badge--inactive">
                Inativo
              </span>
            </div>

            <div className="employees__grid__card__stats">
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">0</span>
                <span className="employees__grid__card__stats__item__label">Cortes hoje</span>
              </div>
              <div className="employees__grid__card__stats__item">
                <span className="employees__grid__card__stats__item__number">0</span>
                <span className="employees__grid__card__stats__item__label">Faturamento</span>
              </div>
            </div>

            <div className="employees__grid__card__details">
              <p className="employees__grid__card__details__item">
                <i className='bx bx-phone'></i>
                Telefone: (11) 99999-3456
              </p>
              <p className="employees__grid__card__details__item">
                <i className='bx bx-wallet'></i>
                Comissão: 30%
              </p>
            </div>

            <div className="employees__grid__card__actions">
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--primary">
                <i className='bx bx-edit'></i>
                Editar
              </button>
              <button className="employees__grid__card__actions__button employees__grid__card__actions__button--secondary">
                <i className='bx bx-bar-chart-alt-2'></i>
                Relatório
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Employees;