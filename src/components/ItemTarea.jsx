import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaApi, consultarTareasApi } from "./helpers/queries";
import Swal from "sweetalert2";

const ItemTarea = ({ tarea, setTareas, setId, setModoEditar, setValue }) => {
  const { _id, nombreTarea } = { ...tarea };

  const activarEditar = (tarea) => {
    setModoEditar(true);
    setId(_id);
    setValue("nombreTarea", nombreTarea);
  };

  const borrarTarea = () => {
    borrarTareaApi(_id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "tarea eliminada",
          "La tarea fue eliminada exitosamente",
          "success"
        );
        consultarTareasApi().then((respuesta) => {
          setTareas(respuesta);
        });
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentar mas tarde", "error");
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {nombreTarea}
      <div>
        <Button variant="warning" onClick={() => activarEditar(tarea)}>
          Editar
        </Button>
        <Button variant="danger" onClick={borrarTarea}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
