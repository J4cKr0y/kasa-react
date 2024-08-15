/* Footer displaying the Kasa logo and a copyright notice. */
import './Footer.scss'
import logo_kasa_ft from '../../img/logo_kasa_ft.png';

function Footer() {
    return (
        <footer className='__foot'>
        <img src={logo_kasa_ft} alt="Kasa"/> <br/>
        <p>© 2020 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer