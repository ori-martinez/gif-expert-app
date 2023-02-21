/* Hooks */
import { useEffect, useState } from 'react';
/* Helpers */
import { getGifs } from '../helpers/getGifs';

// COSTUM HOOK
/* Obtención de uan Cantidad de Gifs de una Categoría con el Llamdo a la API */
export const useFetchGifs = (gifsCategory, gifsQty) => {
    // HOOKS
    /* Estado de los Gifs */
    const [ gifs, setGifs ] = useState([ ]);
    /* Estado de Carga de los Gifs */
    const [ isLoading, setIsLoading ] = useState(true);

    // FUNCIONES
    /* Obtención Asíncrona de los Gifs */
    const getGifsAsync = async () => {
        // CONSTANTES
        /* Espera de la Captura de los Gifs */
        const newGifs = await getGifs(gifsCategory, gifsQty);

        setGifs(newGifs);
        setIsLoading(false);
    }

    // HOOKS
    /* Ejecución de getGifs() como Efecto al Agregar una Categoría Nueva-*/
    useEffect(() => {
        getGifsAsync();
    }, [ ]);

    // RETORNO
    return {
        gifs,
        isLoading,
    }
}
