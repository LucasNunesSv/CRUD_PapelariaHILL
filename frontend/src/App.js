import './styles/App.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cliente from "./pages/cliente.js"
import Funcionario from "./pages/funcionario.js";
import Produto from "./pages/produto.js";
import Pedido from "./pages/pedido.js";

function App() {
  return (
    <div className="App">
      <Cliente />
      {/* <Funcionario />
      <Produto />
      <Pedido /> */}
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> 
    </div>
  );
}

export default App;
