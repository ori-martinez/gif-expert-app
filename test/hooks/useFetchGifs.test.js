import { renderHook, waitFor } from '@testing-library/react';
/* Hooks */
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas del hook useFetchGifs()', () => {
    // PRUEBA DE FUNCIONALIDAD DEL ESTADO INICIAL
    test('El hook debe retornar el estado inicial', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useFetchGifs('Kimetsu No Yaiba', 9));
        /* Propiedades Actuales del Resultado */
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    // PRUEBA DE FUNCIONALIDAD DEL useEffect()
    test('El hook debe retornar un arreglo de gifs y el isLoading en false', async () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useFetchGifs('Kimetsu No Yaiba', 9));

        /* Función que Espera un Cambio en el Hook useFetchGifs() */
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );

        // CONSTANTES
        /* Propiedades Actuales del Resultado */
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})
