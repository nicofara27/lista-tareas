import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { crearTareaApi, consultarTareasApi, editarTareaApi } from "./helpers/queries";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const [id, setId] = useState("");
  const [tareas, setTareas] = useState([]);
  const [modoEditar, setModoEditar] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
    setValue
  } = useForm();

  //Mantiene el focus en el imput
  setFocus("nombreTarea");

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
  }, []);

  const onSubmit = (datos) => {
    console.log(datos);
    crearTareaApi(datos).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 201) {
        Swal.fire(
          "Tarea creada",
          "La Tarea fue creada exitosamente",
          "success"
        );
        reset();
        consultarTareasApi().then((respuesta) => {
          setTareas(respuesta);
        });
      } else {
        Swal.fire("Ocurrio un error", "La Tarea no pudo ser creada", "error");
      }
    });
  };

  const editar = (datos) => {
    editarTareaApi(id, datos).then((respuesta) => {
      console.log(respuesta)
      if (respuesta.status === 200) {
        Swal.fire(
          "Pruducto editado",
          "El producto fue actualizado correctamente",
          "success"
        );
      }
      consultarTareasApi().then((respuesta) => {
        setTareas(respuesta);
      });
      setModoEditar(false)
      reset()
    });
  };

  return (
    <div>
      <Form
        onSubmit={modoEditar ? handleSubmit(editar) : handleSubmit(onSubmit)}
      >
        <Form.Group className="mb-3 d-flex " controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            {...register("nombreTarea", {
              required: "El nombre de la tarea es obligatorio",
              minLength: {
                value: 4,
                message: "La cantidad de caracteres minima es de 4",
              },
              maxLength: {
                value: 150,
                message: "La cantidad de caracteres maxima es de 150",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreTarea?.message}
          </Form.Text>
          <Button variant={modoEditar ? "warning" : "primary"} type="submit">
            {modoEditar ? "Editar" : "Agregar"}
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea
        tareas={tareas}
        setTareas={setTareas}
        setId={setId}
        setModoEditar={setModoEditar}
        setValue={setValue}
      />
    </div>
  );
};

export default FormularioTarea;
