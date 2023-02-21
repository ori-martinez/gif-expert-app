/* Hooks */
import { useState } from 'react';
/* Tipos de Datos de las Propiedades del Componente */
import PropTypes from 'prop-types';

// ESTILOS
const formStyle = "flex justify-center";
const inputStyle = "p-1 pl-2 my-4 w-2/5 text-lg text-stone-900 border border-stone-900 rounded-lg placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-violet-300";

// COMPONENTE
/* Input de Búsqueda de Categorías */
export const AddCategory = ({ handleCategory }) => {
    // CONSTANTES
    /* Estado Inicial del Input */
    const [ inputValue, setInputValue ] = useState('');

    // FUNCIONES
    /* Manejador de Cambio del Input */
    const handleChange = ({ target }) => {
        setInputValue(target.value);
    }
    /* Manejador de Envío del Valor Buscado */
    const handleSubmit = ( event ) => {
        event.preventDefault();

        if (inputValue.trim().length < 1) return;

        handleCategory(inputValue.trim());
        setInputValue('');
    }

    // RETORNO
    return (
        <form 
            className={ formStyle }
            onSubmit={ handleSubmit }
            aria-label="form"
        >
            <input
                type="text"
                placeholder="Search gifs..."
                value={ inputValue }
                className={ inputStyle }
                onChange={ handleChange }
            />
        </form>
    );
}

// PROPIEDADES DEL COMPONENTE
/* Tipos de Datos */
AddCategory.propTypes = {
    handleCategory: PropTypes.func.isRequired,
}
