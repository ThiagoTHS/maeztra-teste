import './styles.scss';

import Newsletter from '../../components/Newsletter';
import MenuFooter from '../../components/MenuFooter';
import SocialMedia from '../../components/SocialMedia';

function Footer() {
  return (
      <footer className="footer">
        <Newsletter />
        <MenuFooter />
        <SocialMedia />
      </footer>
  );
}

export default Footer;
