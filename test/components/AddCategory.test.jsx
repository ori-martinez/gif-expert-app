import { fireEvent, render, screen } from '@testing-library/react';
/* Components */
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas de <AddCategory />', () => {
    // PRUEBA DEL EVENTO onChange
    test('El valor del input debe cambiar', () => {
        /* Renderización del Componente */
        render(<AddCategory handleCategory={ () => { } }/>);

        // CONSTANTES
        /* Elemento input */
        const input = screen.getByRole('textbox');

        /* Simulación del Evento Input */
        fireEvent.input(input, { target: { value: 'Calamardo' } });

        expect(input.value).toBe('Calamardo');
    });

    // PRUEBA DEL EVENTO onSubmit CON UN VALOR
    test('Si el input tiene un valor, debe llamar a handleCategory', () => {
        // CONSTANTES
        /* Función Simulada con Jest (Mock) */
        const handleCategory = jest.fn();
        /* Valor Deseado del Elemento input */
        const inputValue = 'sesshomaru';

        /* Renderización del Componente */
        render(<AddCategory handleCategory={ handleCategory }/>);

        // CONSTANTES
        /* Elementos input y form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        /* Simulación del Evento Input */
        fireEvent.input(input, { target: { value: inputValue } });
        /* Simulación del Evento Submit */
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(handleCategory).toHaveBeenCalled();
        expect(handleCategory).toHaveBeenCalledTimes(1);
        expect(handleCategory).toHaveBeenCalledWith(inputValue);
    });

    // TAREA: Hacer una prueba del evento onSubmit sin un valor en el input

    // PRUEBA DEL EVENTO onSubmit SIN UN VALOR
    test('Si el input no tiene un valor,nodebe llamar a handleCategory', () => {
        // CONSTANTES
        /* Función Simulada con Jest (Mock) */
        const handleCategory = jest.fn();

        /* Renderización del Componente */
        render(<AddCategory handleCategory={ handleCategory }/>);

        // CONSTANTES
        /* Elementos form */
        const form = screen.getByRole('form');

        /* Simulación del Evento Submit */
        fireEvent.submit(form);

        expect(handleCategory).not.toHaveBeenCalled();
        expect(handleCategory).toHaveBeenCalledTimes(0); 
    });
})
