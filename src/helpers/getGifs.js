// CONSTANTES
/* Clave de la API */
const apiKey = 'opWIWqNK9fC9CPVESfrFpSXJ5YfXHExl&q';

// FUNCIONES
/* Obtención de los Gifs para la Categoría */
export const getGifs = async (category, limit) => {
    // CONSTANTES
    /* URL para el Llamado de la API */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }=${ category }&limit=${ limit }`;
    /* Respuesta del Llamdo de la API */
    const response = await fetch(url);
    /* Datos de la Respuesta */
    const { data } = await response.json();
    /* Arreglo con Objetos de Datos sobre los Gifs */
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}