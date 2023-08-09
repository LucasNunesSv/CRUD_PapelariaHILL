import NavBar from "../components/NavBar";
import PhotoGalery1 from "../assets/1.png"
import PhotoGalery2 from "../assets/2.png"
import PhotoGalery3 from "../assets/3.png"
import LogoIcon from "../assets/logoIcon.png"
import HomeBackground from "../assets/homeBackground.png"
import "../styles/home.css";



const Home = () => {

    return (
        
        <div className="container">
            <div className="header">
                <h2>Bem-vindo ao nosso sistema de gerenciamento da loja</h2>
                <h1>HILL Personalizados</h1>
                <p>Aqui, você encontrará todos as funcionalidades para administrar suas vendas realizadas, cadastrar clientes e funcionários e gerenciar estoque de produtos.
Aproveite para conhecer nossos produtos e serviço, fazemos objetos personalizados e únicos para cada cliente, entre em contato com o time de Vendas</p>
            </div>
            <div className="main">
                <div className="galeria">
                    <img src={PhotoGalery1} alt="" />
                    <img src={PhotoGalery2} alt="" />
                    <img src={PhotoGalery3} alt="" />
                </div>
                <div className="logoIcon">
                    <img src={LogoIcon} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Home;