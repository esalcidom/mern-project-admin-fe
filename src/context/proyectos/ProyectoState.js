import React, { useReducer } from 'react';
import proyectoContext from './ProyectoContext';
import proyectoReducer from './ProyectoReducer';

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    //serie de funciones para el CRUD

    return(
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;