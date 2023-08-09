import './styles/App.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home.js';
import Home2 from './pages/home2.js';
import Cliente from "./pages/cliente.js"
import Funcionario from "./pages/funcionario.js";
import Produto from "./pages/produto.js";
import Pedido from "./pages/pedido.js";
import NavBar from "./components/NavBar.js"

function App() {
  return (

    <div className="App">
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home2 />} />
          <Route path='/clientes' element={<Cliente />} />
          <Route path='/funcionarios' element={<Funcionario />} />
          <Route path='/produtos' element={<Produto />} />
          <Route path='/pedidos' element={<Pedido />} />
        </Routes>
      </Router>


      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  );
}

export default App;
