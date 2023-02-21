import { render, screen } from '@testing-library/react';
/* Components */
import { GifCard } from '../../src/components/GifCard';

describe('Pruebas de <GifCard />', () => { 
    // CONSTANTES
    /* Propiedades del Componente */
    const title = "fullmetal alchemist GIF by Funimation";
    const url = "https://media2.giphy.com/media/BSxFhxneZPCvK/giphy.gif?cid=32e67b780vn6ocq2w42enft34s4oawzg4eyfjpheg4n0mzr2&rid=giphy.gif&ct=g";

    // PRUEBA DE COINCIDENCIA
    test('Debe hacer match con el snapshot', () => { 
        /* Renderización del Componente */
        const { container } = render(<GifCard title={ title } url={ url } />);

        expect(container).toMatchSnapshot();
    });

    // PRUEBA DE COINCIDENCIA DE ATRIBUTOS
    test('La imagen debe ser mostrada con los atributos url y alt indicados', () => {
        /* Renderización del Componente */
        render(<GifCard title={ title } url={ url } />);

        // CONSTANTES
        /* Atributos del Elemento img */
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    // PRUEBA DE COINCIDENCIA DE TEXTO
    test('El título debe ser mostrado en el componente', () => {
        /* Renderización del Componente */
        render(<GifCard title={ title } url={ url } />);

        
        expect(screen.getByText(title)).toBeTruthy();
    });
})
