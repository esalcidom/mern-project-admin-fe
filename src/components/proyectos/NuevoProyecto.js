import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { formulario } = proyectoContext;

    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [ e.target.name ]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
            {
                formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyuecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                )
                :
                null
            }
        </Fragment>
    );
};

export default NuevoProyecto;