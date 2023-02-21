import { fireEvent, render, screen } from '@testing-library/react';
/* Components */
import { GifExpertApp } from '../src/GifExpertApp';

// CONSTANTES
/* Valor Deseado del Elemento input */
const inputValue = 'Harry Potter';

describe('Pruebas del <GifExpertApp />', () => {
    // PRUEBA DE COINCIDENCIA
    test('Debe hacer match con el snapshot', () => {
        /* Renderización del Componente */
        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
    });

    // PRUEBA DE COINCIDENCIA DEL ESTADO INICIAL DE categories
    test('La categoría inicial debe ser Fullmetal Alchemist', () => {
        /* Renderización del Componente */
        render(<GifExpertApp />)

        expect(screen.getByText('Fullmetal Alchemist'));
    });

    // PRUEBA DE FUNCIONALIDAD CON UNA CATEGORIA NUEVA
    test('La función handleCategory() debe agregar una nueva categoría', () => {
        /* Renderización del Componente */
        render(<GifExpertApp />)

        // CONSTANTES
        /* Elementos input y form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        /* Simulación del Evento Input */
        fireEvent.input(input, { target: { value: inputValue } });
        /* Simulación del Evento Submit */
        fireEvent.submit(form);

        expect(screen.getByText(inputValue));
    });

    // PRUEBA DE FUNCIONALIDAD CON UNA CATEGORIA REPETIDA
    test('La función handleCategory() no debe agregar una categoría repetida', () => {
        /* Renderización del Componente */
        render(<GifExpertApp />)

        // CONSTANTES
        /* Elementos input y form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // CATEGORIA NUEVA
        /* Simulación del Evento Input */
        fireEvent.input(input, { target: { value: inputValue } });
        /* Simulación del Evento Submit */
        fireEvent.submit(form);
        // CATEGORIA REPETIDA
        /* Simulación del Evento Input */
        fireEvent.input(input, { target: { value: inputValue } });
        /* Simulación del Evento Submit */
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).not.toBe(2);
    });
})
