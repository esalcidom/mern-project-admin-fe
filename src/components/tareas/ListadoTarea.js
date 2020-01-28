import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const ListadoTarea = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectoContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;
    
    //si no hay proyecto seleccionado
    if(!proyecto){
        return <h2>Selecciona un proyecto</h2>
    }

    //array destructuring para extraer proyecto seleccionado
    const [ proyectoActual ] = proyecto;


    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0 ? 
                    (
                        <li className="tarea">
                            <p>No hay tareas</p>
                        </li>
                    )
                    :
                    tareasproyecto.map(tarea => (
                            <Tarea 
                                tarea={tarea}
                            />
                        ))
                }
            </ul>
            <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>Eliminar Proyecto &times;</button>
        </Fragment>
    );
};

export default ListadoTarea;