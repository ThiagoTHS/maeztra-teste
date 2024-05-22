import './styles.scss';
import Header from '../subtemplates/Header';
import Home from '../pages/Home';
import Footer from '../subtemplates/Footer';

function Main() {
  return (
    <div className="main">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Main;