import React, { useReducer } from 'react';
import proyectoContext from './ProyectoContext';
import proyectoReducer from './ProyectoReducer';
import { OBTENER_PROYECTO, FORMULARIO_PROYECTO, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL } from '../../types/index';
import uuid from 'uuid';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda virtual'},
        { id: 2, nombre: 'Intranet'},
        { id: 3, nombre: 'Diseño de Sitios Web'},
        { id: 4, nombre: 'Mern'},
    ]

    const initialState = {
        proyectos:[],
        formulario : false,
        errorFormulario: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id  = uuid.v4();

        // insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto que selecciono el ususario
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;