import './styles.scss';

function MenuFooter() {
  return (
    <div>
        <div class="footer-menu">
            <div>
                <ul>
                    <li class="footer-menu__item footer-menu__item--title">Informações</li>
                    <li class="footer-menu__item"><a href="#">Quem Somos</a></li>
                    <li class="footer-menu__item"><a href="#">Prazo de Envio</a></li>
                    <li class="footer-menu__item"><a href="#">Trocas e Devoluções</a></li>
                    <li class="footer-menu__item"><a href="#">Promoções e Cupons</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="footer-menu__item footer-menu__item--title">Minha Conta</li>
                    <li class="footer-menu__item"><a href="#">Minha Conta</a></li>
                    <li class="footer-menu__item"><a href="#">Meus Pedidos</a></li>
                    <li class="footer-menu__item"><a href="#">Cadastre-se</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="footer-menu__item footer-menu__item--title">Onde nos Encontrar</li>
                    <li class="footer-menu__item"><a href="#">Lojas</a></li>
                    <li class="footer-menu__item"><a href="#">Endereço</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default MenuFooter;
