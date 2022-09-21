import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      Tarea 1 <Button variant="danger">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
