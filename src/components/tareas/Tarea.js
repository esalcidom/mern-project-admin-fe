import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/TareaContext';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardaTareaActual } = tareasContext;

    //Extraer el proyecto
    const [ proyectoActual ] = proyecto;

    //cuando el ususario presiona el btn para eliminar tarea
    const onclickEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }
        else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //agreaga una tarea actual cuando el ususario desea editarla
    const seleccionarTarea = tarea => {
        guardaTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ?
                    (<button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>Completo</button>)
                    :
                    (<button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>Incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=>onclickEliminar(tarea.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea;