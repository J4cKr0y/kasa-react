/*Header displaying the logo and navigation links. */
import './Header.scss'
import Logo from './Logo';
import logo_kasa from '../../img/logo_kasa.svg';
import Nav from './Nav';


function Header() {
    const title = 'Kasa';
    const links = [
  { path: "/", name: "Accueil" },
  { path: "/about", name: "À Propos" },
];
    return (    
    <div className='__header'>

        <Logo class_name='__header--logo' img_src={logo_kasa} alt="Kasa"title={title}  />

        <Nav links={links} className='__header--nav' />

    </div>) 
}

export default Header
