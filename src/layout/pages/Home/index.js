import './styles.scss';

import MainBanner from '../../components/MainBanner';
import Tipbar from '../../components/Tipbar';
import TipbarBrand from '../../components/TipbarBrand';
import ProductShelf from '../../components/ProductShelf';
import ProductCard from '../../components/ProductCard';
import BannerBottom from '../../components/BannerBottom';
import ModalNewsletter from '../../components/ModalNewsletter';

import { useDetectMobile } from '../../utils/utils';

import foto01 from '../../assets/mobile_banner-01.jpg'
import foto02 from '../../assets/mobile_banner-02.jpg'
import foto03 from '../../assets/mobile_banner-01.jpg'
import foto04 from '../../assets/mobile_banner-02.jpg'
import foto05 from '../../assets/mobile_banner-01.jpg'
import foto06 from '../../assets/mobile_banner-02.jpg'

import desktopfoto01 from '../../assets/desktop_banner-01.jpg'
import desktopfoto02 from '../../assets/desktop_banner-02.jpg'
import desktopfoto03 from '../../assets/desktop_banner-01.jpg'
import desktopfoto04 from '../../assets/desktop_banner-02.jpg'
import desktopfoto05 from '../../assets/desktop_banner-01.jpg'
import desktopfoto06 from '../../assets/desktop_banner-02.jpg'

import tipbar01 from '../../assets/Tipbar01-icon.svg'
import tipbar02 from '../../assets/Tipbar02-icon.svg'
import tipbar03 from '../../assets/Tipbar03-icon.svg'
import tipbar04 from '../../assets/Tipbar04-icon.svg'
import tipbar05 from '../../assets/Tipbar05-icon.svg'

import tipbarBrand01 from '../../assets/TipbarBrand01.png'
import tipbarBrand02 from '../../assets/TipbarBrand02.png'
import tipbarBrand03 from '../../assets/TipbarBrand03.png'
import tipbarBrand04 from '../../assets/TipbarBrand04.png'
import tipbarBrand05 from '../../assets/TipbarBrand05.png'

// const tipbarIcons = [tipbar01, tipbar02, tipbar03, tipbar04, tipbar05]
const contentTipbar = [ 
  {icon: tipbar01, title: 'Produtos importados', description: 'Produto de Alta Qualidade'},
  {icon: tipbar02, title: 'Estoque no Brazil', description: 'Produtos mais perto de você!'},
  {icon: tipbar03, title: 'Trocas Garantidas', description: 'Trocas em até 48 horas, vejas as regras'},
  {icon: tipbar04, title: 'Ganhe 5% off', description: 'Pagando à vista no Cartão'},
  {icon: tipbar05, title: 'Frete Grátis', description: 'Em compras acima de R$ 499,00'},
]

const contentTipbarBrand = [tipbarBrand01, tipbarBrand02, tipbarBrand03, tipbarBrand04, tipbarBrand05]

const mobileimagens = [foto01, foto02, foto03, foto04, foto05, foto06]
const desktopimagens = [desktopfoto01, desktopfoto02, desktopfoto03, desktopfoto04, desktopfoto05, desktopfoto06]

function Home() {
  const banners = useDetectMobile() ? mobileimagens : desktopimagens
  return (
    <div className="home">
      <MainBanner imagens={banners} />
      <Tipbar contents={contentTipbar} />
      <TipbarBrand contents={contentTipbarBrand} />
      <ProductShelf />
      <BannerBottom />
      <ModalNewsletter />

    </div>
  );
}

export default Home;
