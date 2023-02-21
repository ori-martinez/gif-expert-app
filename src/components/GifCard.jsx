/* Tipos de Datos de las Propiedades del Componente */
import PropTypes from 'prop-types';

// ESTILOS
/* Contenedores */
const gifCardStyle = "bg-violet-500 border-b-4 border-r-4 border-violet-500 rounded-lg shadow-2xl shadow-stone-500";
const gifCardTitleStyle = "h-12 w-full flex items-center justify-center bg-teal-200 border border-t-0 border-stone-900 rounded-b-md";
/* Gifs */
const gifImgStyle = "h-56 w-full border border-b-0 border-stone-900 rounded-t-md object-cover";
/* Texto */
const gifTitleStyle = "text-center text-md text-stone-900 font-semibold";

// TAREAS
/* __________________________________________________________________________________________________________
    
    1. Aladir PropTypes para tener como obligatorias las propiedades title y url
    2. Evaluar el snapshot mediante una prueba
__________________________________________________________________________________________________________ */

// COMPONENTE
/* Carta del Gif */
export const GifCard = ({ title, url }) => {
    // RETORNO
    return (
        <div className={ gifCardStyle }>
            { /* Gif */ }
            <img
                src={ url } 
                alt={ (title === '') ? 'GIF' : title }
                className={ gifImgStyle }
            />

            { /* Título del Gif */ }
            <div className={ gifCardTitleStyle }>
                <span className={ gifTitleStyle }> { (title === '') ? 'GIF' : title } </span>
            </div>
        </div>
    );
}

// PROPIEDADES DEL COMPONENTE
/* Tipos de Datos */
GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
