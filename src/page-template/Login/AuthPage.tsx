import React, { useState } from 'react';

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleBack = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <section className="auth">
      <div className="auth__left">
        <div className="auth__left__content">
          <div className="auth__left__content__brand">
            <h1 className="auth__left__content__brand__name">
              Business.IA<span className="auth__left__content__brand__name__dot">●</span>
            </h1>
            <p className="auth__left__content__brand__tagline">
              Gestão Inteligente para Barbearias
            </p>
          </div>

          <div className="auth__left__content__features">
            <div className="auth__left__content__features__item">
              <div className="auth__left__content__features__item__icon">
                <i className='bx bx-calendar-check'></i>
              </div>
              <div className="auth__left__content__features__item__text">
                <h3>Agendamentos Simplificados</h3>
                <p>Gerencie sua agenda de forma intuitiva e eficiente</p>
              </div>
            </div>

            <div className="auth__left__content__features__item">
              <div className="auth__left__content__features__item__icon">
                <i className='bx bx-bar-chart-alt-2'></i>
              </div>
              <div className="auth__left__content__features__item__text">
                <h3>Relatórios Detalhados</h3>
                <p>Análises completas do desempenho do seu negócio</p>
              </div>
            </div>

            <div className="auth__left__content__features__item">
              <div className="auth__left__content__features__item__icon">
                <i className='bx bx-brain'></i>
              </div>
              <div className="auth__left__content__features__item__text">
                <h3>Inteligência Artificial</h3>
                <p>Insights automáticos para decisões estratégicas</p>
              </div>
            </div>
          </div>

          <div className="auth__left__content__testimonial">
            <p className="auth__left__content__testimonial__quote">
              "Transformou completamente a forma como gerencio minha barbearia. Imprescindível!"
            </p>
            <p className="auth__left__content__testimonial__author">
              - Carlos Silva, Barbeiro há 10 anos
            </p>
          </div>
        </div>
      </div>

      <div className="auth__right">
        {!showLogin && !showSignup ? (
          <>
            {/* <div className="auth__right__header">
              <div className="auth__right__header__brand">
                Business.IA<span className="auth__right__header__brand__dot">●</span>
              </div>
            </div> */}

            <div className="auth__right__content">
              <div className="auth__right__content__welcome">
                <h2 className="auth__right__content__welcome__title">Bem-vindo de volta!</h2>
                <p className="auth__right__content__welcome__subtitle">
                  Escolha uma opção para continuar
                </p>
              </div>

              <div className="auth__right__content__buttons">
                <button 
                  className="auth__right__content__buttons__btn auth__right__content__buttons__btn--primary"
                  onClick={handleLoginClick}
                >
                  <i className='bx bx-log-in'></i>
                  Fazer Login
                </button>
                <button 
                  className="auth__right__content__buttons__btn auth__right__content__buttons__btn--secondary"
                  onClick={handleSignupClick}
                >
                  <i className='bx bx-user-plus'></i>
                  Criar Conta
                </button>
              </div>

              <div className="auth__right__content__divider">
                <span>ou continue com</span>
              </div>

              <div className="auth__right__content__social">
                <button className="auth__right__content__social__btn">
                  <i className='bx bxl-google'></i>
                </button>
                <button className="auth__right__content__social__btn">
                  <i className='bx bxl-facebook'></i>
                </button>
                <button className="auth__right__content__social__btn">
                  <i className='bx bxl-apple'></i>
                </button>
              </div>
            </div>

            <div className="auth__right__footer">
              <div className="auth__right__footer__links">
                <a href="#" className="auth__right__footer__links__item">Termos de uso</a>
                <span className="auth__right__footer__links__separator">|</span>
                <a href="#" className="auth__right__footer__links__item">Política de privacidade</a>
              </div>
            </div>
          </>
        ) : showLogin ? (
          <LoginForm onBack={handleBack} />
        ) : (
          <SignupForm onBack={handleBack} />
        )}
      </div>
    </section>
  );
};

// Componente de Login
const LoginForm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <>
      <div className="auth__right__header">
        <button className="auth__right__header__back" onClick={onBack}>
          <i className='bx bx-arrow-back'></i>
        </button>
        <div className="auth__right__header__brand">
          Business.IA<span className="auth__right__header__brand__dot">●</span>
        </div>
      </div>

      <div className="auth__right__form">
        <div className="auth__right__form__header">
          <h2 className="auth__right__form__header__title">Fazer Login</h2>
          <p className="auth__right__form__header__subtitle">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>

        <form className="auth__right__form__content">
          <div className="auth__right__form__content__group">
            <label className="auth__right__form__content__group__label">
              <i className='bx bx-envelope'></i>
              E-mail
            </label>
            <input
              type="email"
              className="auth__right__form__content__group__input"
              placeholder="seu@email.com"
            />
          </div>

          <div className="auth__right__form__content__group">
            <label className="auth__right__form__content__group__label">
              <i className='bx bx-lock-alt'></i>
              Senha
            </label>
            <input
              type="password"
              className="auth__right__form__content__group__input"
              placeholder="••••••••"
            />
          </div>

          <div className="auth__right__form__content__options">
            <label className="auth__right__form__content__options__remember">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>
            <a href="#" className="auth__right__form__content__options__forgot">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="auth__right__form__content__submit">
            <i className='bx bx-log-in'></i>
            Entrar
          </button>

          <div className="auth__right__form__content__footer">
            <p>
              Não tem uma conta?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
                Criar conta
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

// Componente de Signup
const SignupForm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <>
      <div className="auth__right__header">
        <button className="auth__right__header__back" onClick={onBack}>
          <i className='bx bx-arrow-back'></i>
        </button>
        <div className="auth__right__header__brand">
          Business.IA<span className="auth__right__header__brand__dot">●</span>
        </div>
      </div>

      <div className="auth__right__form">
        <div className="auth__right__form__header">
          <h2 className="auth__right__form__header__title">Criar Conta</h2>
          <p className="auth__right__form__header__subtitle">
            Preencha os dados para começar sua jornada
          </p>
        </div>

        <form className="auth__right__form__content">
          <div className="auth__right__form__content__row">
            <div className="auth__right__form__content__group">
              <label className="auth__right__form__content__group__label">
                <i className='bx bx-user'></i>
                Nome
              </label>
              <input
                type="text"
                className="auth__right__form__content__group__input"
                placeholder="Seu nome"
              />
            </div>

            <div className="auth__right__form__content__group">
              <label className="auth__right__form__content__group__label">
                <i className='bx bx-user'></i>
                Sobrenome
              </label>
              <input
                type="text"
                className="auth__right__form__content__group__input"
                placeholder="Seu sobrenome"
              />
            </div>
          </div>

          <div className="auth__right__form__content__group">
            <label className="auth__right__form__content__group__label">
              <i className='bx bx-store'></i>
              Nome da Barbearia
            </label>
            <input
              type="text"
              className="auth__right__form__content__group__input"
              placeholder="Nome do seu estabelecimento"
            />
          </div>

          <div className="auth__right__form__content__group">
            <label className="auth__right__form__content__group__label">
              <i className='bx bx-envelope'></i>
              E-mail
            </label>
            <input
              type="email"
              className="auth__right__form__content__group__input"
              placeholder="seu@email.com"
            />
          </div>

          <div className="auth__right__form__content__group">
            <label className="auth__right__form__content__group__label">
              <i className='bx bx-phone'></i>
              Telefone
            </label>
            <input
              type="tel"
              className="auth__right__form__content__group__input"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="auth__right__form__content__row">
            <div className="auth__right__form__content__group">
              <label className="auth__right__form__content__group__label">
                <i className='bx bx-lock-alt'></i>
                Senha
              </label>
              <input
                type="password"
                className="auth__right__form__content__group__input"
                placeholder="••••••••"
              />
            </div>

            <div className="auth__right__form__content__group">
              <label className="auth__right__form__content__group__label">
                <i className='bx bx-lock-alt'></i>
                Confirmar Senha
              </label>
              <input
                type="password"
                className="auth__right__form__content__group__input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="auth__right__form__content__terms">
            <label className="auth__right__form__content__terms__checkbox">
              <input type="checkbox" />
              <span>
                Eu concordo com os{' '}
                <a href="#">Termos de uso</a> e{' '}
                <a href="#">Política de privacidade</a>
              </span>
            </label>
          </div>

          <button type="submit" className="auth__right__form__content__submit">
            <i className='bx bx-user-plus'></i>
            Criar Conta
          </button>

          <div className="auth__right__form__content__footer">
            <p>
              Já tem uma conta?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
                Fazer login
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthPage;