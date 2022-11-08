import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas, setTareas,setId, setModoEditar, setValue }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas} setId={setId} setModoEditar={setModoEditar} setValue={setValue} />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
