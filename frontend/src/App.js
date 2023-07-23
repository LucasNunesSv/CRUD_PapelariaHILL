import GlobalStyle from "./styles/global"
import styled from "styled-components"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/form";
import Grid from "./components/Grid";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

`;

const Title = styled.h2``;

function App() {
  return (
    <div className="App">
      <Container>
        <Title>Cadastro de Usuarios</Title>
        <Form></Form>
        <Grid></Grid>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </div>
  );
}

export default App;
