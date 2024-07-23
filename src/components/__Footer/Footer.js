import './Footer.scss'
import logo_kasa from '../../img/logo_kasa.svg';

function Footer() {
    return (
        <div>
        <img src={logo_kasa} alt="Kasa"/>
        <p>© 2020 Kasa. All rights reserved.</p>
        </div>
    );
}

export default Footer