import './styles.scss';
import bgnewsletter from '../../assets/bg-newsletter.jpg'
import mail from '../../assets/newsletter-mail-icon.svg'
import send from '../../assets/icon-send.svg'
import React, { useState } from 'react';

import { useDetectMobile } from '../../utils/utils';

function ModalNewsletter() {
  const mobile = !useDetectMobile()
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    isModalOpen &&
      <div className="modalnewsletter">
        <div className="modalnewsletter__modal">
        <button className="modalnewsletter__close" onClick={closeModal}>fechar</button>
          {mobile &&
            <img className="modalnewsletter__bg" src={bgnewsletter} alt='bg'/>
          }
          <div className="modalnewsletter__content">
            <img src={mail} alt='bg'/>
            <h3>Bem Vindo à MAEZTRA</h3>
            <p>Receba em Primeira mão</p>
            <p>desconto e ofertas exclusivas</p>
            <form className="modalnewsletter__form" action="">
              <input className="modalnewsletter__email" type="text" id="newsletter" name="newsletter" placeholder='Digite seu e-mail' />
              <button className="modalnewsletter__submit" type="submit">
                <span>
                  Enviar
                </span>
                <img src={send} alt='bg'/>
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
}

export default ModalNewsletter;
