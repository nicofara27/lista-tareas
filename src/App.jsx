import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <Container className="my-5">
      <h1 className="display-2 text-center">Lista de tareas</h1>
      <hr />
      <FormularioTarea />
    </Container>
  );
}

export default App;
