import './Header.scss'
import logo_kasa from '../../img/logo_kasa.svg';
import { Link } from 'react-router-dom';

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
                    <Link to="/">Home</Link>   
                </li>
                <li>   
                <Link to="/">À propos </Link>
                </li>
            </ul>
        </nav>
    </div>) 
}

export default Header
