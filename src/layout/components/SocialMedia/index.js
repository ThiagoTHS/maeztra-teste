import './styles.scss';

import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'

import mastercard from '../../assets/mastercard.svg'
import visa from '../../assets/visa.svg'

import maeztra from '../../assets/maeztra.svg'
import vtex from '../../assets/vtex.svg'

function SocialMedia() {
  return (
    <div className="socialmedia">
      <div className="socialmedia__medias">
        <a href='#'>
          <img src={facebook} alt='facebook'/>
        </a>
        <a href='#'>
          <img src={linkedin} alt='linkedin'/>
        </a>
        <a href='#'>
          <img src={instagram} alt='instagram'/>
        </a>
        <a href='#'>
          <img src={youtube} alt='youtube'/>
        </a>
      </div>
      <div className="socialmedia__cards">
        <img src={mastercard} alt='mastercard'/>
        <img src={visa} alt='visa'/>
        <img src={mastercard} alt='mastercard'/>
        <img src={visa} alt='visa'/>
      </div>
      <div className="socialmedia__dev">
        <div>
          <h5>Powered by</h5>
          <img src={vtex} alt='vtex'/>
        </div>
        <div>
          <h5>Developed by</h5>
          <img src={maeztra} alt='maeztra'/>
        </div>
        
      </div>
    </div>
  );
}

export default SocialMedia;
