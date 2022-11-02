import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import {
  crearTareaApi,
  consultarTareasApi
} from "./helpers/queries";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    consultarTareasApi().then(
      (respuesta) => {
        setTareas(respuesta);
      },
      (reason) => {
        console.log(reason);
        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente mas tarde",
          "error"
        );
      }
    );
  }, [tareas]);

  const onSubmit = (datos)=> {
    crearTareaApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Tarea creada",
          "La Tarea fue creada exitosamente",
          "success"
        );
        reset();
      } else {
        Swal.fire("Ocurrio un error", "La Tarea no pudo ser creada", "error");
      }
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex " controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Ingrese una tarea" {...register("nombreTarea", {
              required: "El nombre de la tarea es obligatorio"
            })}/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea tareas={tareas} setTareas={setTareas}/>
    </div>
  );
};

export default FormularioTarea;
