import './Header.scss'
import logo_kasa from '../../img/logo_kasa.svg';

function Header() {
    const title = 'Kasa'
    return (    
    <div className='__header'>
        <div className='__header--logo'>
            <h1><img src={logo_kasa} alt="Kasa" />{title}</h1>
        </div>
        <nav className='__header--nav'>
            <ul>
                <li>
                    
                        Accueil
                    
                </li>
                <li>
                    
                        À propos
                    
                </li>
            </ul>
        </nav>
    </div>) 
}

export default Header
