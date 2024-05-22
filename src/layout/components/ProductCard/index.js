import './styles.scss';

import productcardImage01 from '../../assets/productCard01.jpg'
import productcardImage02 from '../../assets/productCard02.jpg'

function ProductCard({image, colors, price, name, description}) {
  return (
    <div className="productcard">
      <img className="productcard__image" src={productcardImage01} alt='imagem do produto' />
      <div className="productcard__content"> 
        <ul className="productcard__colors">
          <li className="productcard__color productcard__color--laranja productcard__color--active">laranja</li>
          <li className="productcard__color productcard__color--vermelho">vermelho</li>
          <li className="productcard__color productcard__color--azul-claro">azul claro</li>
          <li className="productcard__color productcard__color--azul-escuro">azul escuro</li>
        </ul>
        <div className="productcard__price">R$ 500,00</div>
        <div className="productcard__name">Faux Suede Mini Skirt</div>
        <div className="productcard__description">A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</div>
        <button className="productcard__buybutton">Adicionar</button>
      </div>
    </div>
  );
}

export default ProductCard;
