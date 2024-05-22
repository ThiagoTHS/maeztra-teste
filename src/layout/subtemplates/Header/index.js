import './styles.scss';
import menuicon from '../../assets/icon-menu.svg';
import logo from '../../assets/logo.svg';
import buscaicon from '../../assets/icon-busca.svg';
import minicarticon from '../../assets/icon-minicart.svg';
import usericon from '../../assets/icon-user.svg';
import hearticon from '../../assets/icon-heart.svg';

import { useDetectMobile } from '../../utils/utils';

import MenuHeader from '../../components/MenuHeader';

function Header() {

  const mobile = useDetectMobile()

  return (
      <header className="header">
        <div className="header__container">
          <div className="header__topbar">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </div>
          <div className="header__content">
            {mobile &&  
              <button className="header__menu-mobile">
                <img src={menuicon} alt='menu'/>
              </button>
            }
            <a className="header__logo-link" href='/'>
              <img className="header__logo-image" src={logo} alt='logo'/>
            </a>
            
            <form className="header__busca" action="">
              {!mobile &&  
                <input className="header__busca-input" type="text" id="busca" name="busca" placeholder='O Que Você Busca?'/>
              }
              <button className="header__busca-submit" type="submit">
                {mobile ?
                  <img src={buscaicon} alt='minha conta' />
                  :
                  <span>Busca</span>
                }
              </button>
            </form>
            
            <ul className="header__buttons">
              {!mobile && 
                <li>
                  <button>
                    <img src={usericon} alt='minha conta' />
                    <span>Minha Conta</span>
                  </button>
                </li>
              }
              {!mobile && 
                <li>
                  <button>
                    <img src={hearticon} alt='favoritos' />
                    <span>Favoritos</span>
                  </button>
                </li>
              }
              <li>
                <button className="header__button-minicart">
                  <img src={minicarticon} alt='minicart' />
                  {!mobile && 
                    <span>Meu Carrinho</span>
                  }
                </button>
              </li>
            </ul>

          </div>
          {!mobile &&
            <div className="header__menu">
              <MenuHeader />
            </div>
          }
        </div>
      </header>
  );
}

export default Header;
