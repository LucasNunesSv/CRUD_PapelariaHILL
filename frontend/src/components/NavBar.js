import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <div class="container">
            <div class="navbarContainer">

                <div class="menuContainer">

                    {/* <img src={logoEscrita} /> */}

                    <ul className="navBarContainer">
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