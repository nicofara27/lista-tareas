import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaApi, consultarTareasApi } from "./helpers/queries";
import Swal from "sweetalert2";

const ItemTarea = ({ tarea, setTareas }) => {
  const {_id, nombreTarea} = { ...tarea };

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
      <Button variant="danger" onClick={borrarTarea}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
