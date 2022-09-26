import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {nombreTarea}
      <Button
        variant="danger"
        onClick={() => {
          borrarTarea(nombreTarea);
        }}
      >
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
