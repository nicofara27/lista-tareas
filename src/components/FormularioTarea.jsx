import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {

  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);

  //Ciclo de vida del componente
  useEffect(()=>{
    localStorage.setItem('listaTareas', JSON.stringify(arregloTareas))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTareas, tarea]);
    setTarea("");
  };
  
  const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((item) => item !== nombre);
  
    setArregloTareas(arregloModificado);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex " controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea}/>
    </div>
  );
};


export default FormularioTarea;
