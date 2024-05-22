import './styles.scss';
import dressicon from '../../assets/icon-dress.svg';

function MenuHeader() {
  return (
    <nav class="menu-header">
      <ul class="menu-header__list">
        <li><a href="#"><img src={dressicon} alt='minha conta' />Novidades</a></li>
        <li><a href="#">Vestidos</a></li>
        <li><a href="#">Roupas</a></li>
        <li><a href="#">Sapatos</a></li>
        <li><a href="#">Lingerie</a></li>
        <li><a href="#">Acessórios</a></li>
        <li><a href="#">OUTLET</a></li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
