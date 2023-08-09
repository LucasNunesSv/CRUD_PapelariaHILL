import "../styles/home2.css"
import Foto1 from "../assets/1.png"
import Foto2 from "../assets/2.png"
import Foto3 from "../assets/3.png"
import LogoIcon from "../assets/logoIcon.png"

const Home2 = () => {

    return(
        <div className="homeContainer">
            <div className="header">
                <h2>Bem-vindo ao nosso sistema de gerenciamento da loja</h2>
                <h1>HILL Personalizados</h1>
                <p>Aqui, você encontrará todos as funcionalidades para administrar suas vendas realizadas, cadastrar clientes e funcionários e gerenciar estoque de produtos.
Aproveite para conhecer nossos produtos e serviço, fazemos objetos personalizados e únicos para cada cliente, entre em contato com o time de Vendas</p>
            </div>
            <div className="main">
                <div className="galery">
                    <img src={Foto1} alt="" />
                    <img src={Foto3} alt="" />
                    <img src={Foto2} alt="" />
                </div>
                <div className="logoIcon">
                    <img src={LogoIcon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home2