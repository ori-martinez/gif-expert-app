import { render, screen } from "@testing-library/react";
/* Components */
import { GifsGrid } from '../../src/components/GifsGrid';
/* Hooks */
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// MOCKS
/* Simulación del Hook useFetchGifs() */
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifsGrid />', () => {
    // CONSTANTES
    /* Categoría de Prueba para los Gifs */
    const category = 'Kimetsu No Yaiba';

    // PRUEBA DE COINCIDENCIA DE TEXTO
    test('El loading debe ser mostrado inicialmente', () => {
        /* Simulación de Valores del Mock useFetchGifs() */
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });

        /* Renderización del Componente */
        render(<GifsGrid 
            gifsCategory={ category }
            gifsQty={ 9 }
        />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    // PRUEBA DE FUNCIONALIDAD
    test('Al cargar los gifs con el useFetchGifs debe mostrar un GifCard para cada uno', () => {
        // CONSTANTES
        /* Datos de Prueba para gifs */
        const gifs = [ {
            id: "o49truNUnNXgc",
            title: "fullmetal alchemist GIF",
            url: "https://media0.giphy.com/media/o49truNUnNXgc/giphy.gif?cid=32e67b785nssxhituytwjen0g4m0r6938lvqs56ac9i1dvzo&rid=giphy.gif&ct=g",
        },
        {
            id: "f0CBUVvtl2dgc",
            title: "cat ears GIF",
            url: "https://media2.giphy.com/media/f0CBUVvtl2dgc/giphy.gif?cid=32e67b78d0hj2st0uq6xepqm2wwgcm4jkil6sxed1qrfzwsm&rid=giphy.gif&ct=g",
        } ];
        
        /* Simulación de Valores del Mock useFetchGifs() */
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false,
        });

        /* Renderización del Componente */
        render(<GifsGrid 
            gifsCategory={ category }
            gifsQty={ 2 }
        />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
})
