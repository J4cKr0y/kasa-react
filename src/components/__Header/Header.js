/*Header displaying the logo and navigation links. */
import './Header.scss'
import { useMyVars } from '../Utils/variables';
import Logo from './Logo';
import Nav from './Nav';


function Header() {
    const {logo} = useMyVars();
    const title = 'Kasa'
    const links = [
  { path: "/", name: "Accueil" },
  { path: "/about", name: "À propos" },
];
    return (    
    <div className='__header'>

        <Logo class_name='__header--logo' img_src={logo} alt="Kasa"title={title}  />

        <Nav links={links} className='__header--nav' />

    </div>) 
}

export default Header
