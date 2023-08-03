import './styles/App.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cliente from "./pages/cliente.js"

function App() {
  return (
    <div className="App">
      <Cliente />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> 
    </div>
  );
}

export default App;
