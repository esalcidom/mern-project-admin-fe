import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto, mostrarError, errorFormulario } = proyectoContext;

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

        //validar el proyecto
        if(nombre === ''){
            //mostrar mensaje de error
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto);

        //reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
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
            {errorFormulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
    );
};

export default NuevoProyecto;