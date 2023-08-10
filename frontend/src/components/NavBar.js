import { Link } from 'react-router-dom'
import Logo from '../assets/mountainLogoDesign.png'
import '../styles/NavBar.css'

const NavBar = () => {

    return (

        <div class="container">
            <div class="navbarContainer">

                <div class="menuContainer">

                    <Link  className='linkLogo' to='/'><img class="logoNavbar" src={Logo} /></Link>

                    <ul>
                        <li>
                            <Link className='Links' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='Links' to='/clientes'>Clientes</Link>
                        </li>
                        <li>
                            <Link className='Links' to='/funcionarios'>Funcionários</Link>
                        </li>
                        <li>
                            <Link className='Links' to='/pedidos'>Pedidos</Link>
                        </li>
                        <li>
                            <Link className='Links' to='/produtos'>Produtos</Link>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default NavBar;