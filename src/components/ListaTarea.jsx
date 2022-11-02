import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas, setTareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas}/>
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
