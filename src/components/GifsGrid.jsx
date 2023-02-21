/* Componentes */
import { GifCard } from './GifCard';
/* Hooks */
import { useFetchGifs } from '../hooks/useFetchGifs';
/* Tipos de Datos de las Propiedades del Componente */
import PropTypes from 'prop-types';

// ESTILOS
/* Contenedores */
const gifTitleStyle = "mx-auto mt-6 w-4/5";
const gifGridStyle = "mx-auto my-4 w-4/5 grid grid-cols-3 gap-12 rounded-lg";
/* Textos */
const h3Style = "ml-12 p-3 text-3xl text-teal-500 font-bold";
const h2Style = "text-center text-4xl text-stone-900 font-bold";

// COMPONENTE
/* Grid de Gifs sobre la Categoría */
export const GifsGrid = ({ gifsCategory, gifsQty }) => {
    /* HOOKS */
    /* Obtención de los Gifs sobre la Categoría */
    const { gifs, isLoading } = useFetchGifs(gifsCategory, gifsQty);

    // RETORNO
    return (
        <>
            { /* Título de la Categoría */ }
            <div className={ gifTitleStyle }>
                <h3 className={ h3Style }> { gifsCategory } </h3>
            </div>

            { /* Mensaje de Carga del Grid de Gifs */
                isLoading && (<h2 className={ h2Style }> Cargando... </h2>)
            }

            { /* Grid de Gifs de la Categoría */ }
            <div className={ gifGridStyle }>
                { gifs.map(gif => (
                    <GifCard
                        key={ gif.id }
                        { ...gif }
                    />
                ))}
            </div>
        </>
    );
}

// PROPIEDADES DEL COMPONENTE
/* Tipos de Datos */
GifsGrid.propTypes = {
    gifsCategory: PropTypes.string.isRequired,
    gifsQty: PropTypes.number.isRequired,
}
