import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoTarea = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;
    
    //si no hay proyecto seleccionado
    if(!proyecto){
        return <h2>Selecciona un proyecto</h2>
    }

    //array destructuring para extraer proyecto seleccionado
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true},
        { nombre: 'Elegir Colores', estado: false},
        { nombre: 'Elegir Hosting', estado: false}
    ]

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? 
                    (
                        <li className="tarea">
                            <p>No hay tareas</p>
                        </li>
                    )
                    :
                    tareasProyecto.map(tarea => (
                            <Tarea 
                                tarea={tarea}
                            />
                        ))
                }
            </ul>
            <button type="button" className="btn btn-eliminar">Eliminar Proyecto &times;</button>
        </Fragment>
    );
};

export default ListadoTarea;