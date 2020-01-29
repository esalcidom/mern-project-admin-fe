import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/ProyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //obtener proyectos en cuanto carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    //revisar si proyectos tiene contenidos
    if(proyectos.length === 0 ) return <p>No hay proyectos</p>;

    

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                    key={proyecto.id}
                    timeoput={200}
                    classNAme="proyecto"
                >
                    <Proyecto
                    
                    proyecto={proyecto}
                />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
};

export default ListadoProyectos;