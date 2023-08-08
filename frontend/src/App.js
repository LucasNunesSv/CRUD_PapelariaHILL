import './styles/App.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home.js';
import Cliente from "./pages/cliente.js"
import Funcionario from "./components/funcionario.js";
import Produto from "./pages/produto.js";
import Pedido from "./pages/pedido.js";
// import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
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
