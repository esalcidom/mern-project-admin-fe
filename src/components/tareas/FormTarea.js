import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { errorTarea, agregarTarea, validarTarea, obtenerTareas, tareaSeleccionada, actualizarTarea } = tareasContext;

    //Effect que detecta si hay tarea seleccionada
    useEffect(() => {
        if(tareaSeleccionada !== null){
            guardarTarea(tareaSeleccionada);
        }
        else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    //state del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    if(!proyecto) return null;

    const [ proyectoActual ] = proyecto;

    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [ e.target.name ]: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        // validar si edicion o nueva tarea
        if(tareaSeleccionada === null){
            //tarea nueva
            //agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }

        else{
            actualizarTarea(tarea);
        }
        

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
};

export default FormTarea;