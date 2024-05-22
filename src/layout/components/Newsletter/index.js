import './styles.scss';

function Newsletter() {
  return (
    <div className="newsletter">
        <h3 className="newsletter__title">Recebe Nossa Newsletter</h3>
        <form className="newsletter__form" action="">
          <input className="newsletter__email" type="text" id="newsletter" name="newsletter" placeholder='Digite seu e-mail' />
          <input className="newsletter__submit" type="submit" value="Enviar" />
        </form>
    </div>
  );
}

export default Newsletter;
