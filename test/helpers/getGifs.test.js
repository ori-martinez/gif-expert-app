/* Helpers */
import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas de getGifs()', () => { 
    // PRUEBA DE FUNCIONALIDAD
    test('El retorno debe ser un arreglo de gifs', async () => {
        // CONSTANTES
        /* Obtención de Gifs */
        const gifs = await getGifs('Sango', 20);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
})
