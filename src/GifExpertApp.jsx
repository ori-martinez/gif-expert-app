import { useState } from 'react';
/* Componentes */
import { AddCategory, GifsGrid } from './components';

// ESTILOS
/* Textos */
const h1Style = "p-2 m-4 text-center text-4xl text-teal-600 font-bold";

// TAREAS
/* __________________________________________________________________________________________________________
    
    1. Hacer la función addCategory para agregar una categoria al clickear un botón
    2. Usar el setCategories para añadir un nuevo elemento en categories desde el componente handleCategory
    3. Mostrar en pantallas el título de los gifs de la categoría buscada, usando el id de estos como key, en
el componente GifsGrid
    4. Hacer pruebas sobre el componente GifExpertApp
__________________________________________________________________________________________________________ */

// COMPONENTE
/* Búscador de Gifs por Categorías */
export const GifExpertApp = () => {
    // CONSTANTES
    /* Estado de las Categorías Buscadas */
    const [ categories, setCategories ] = useState([ 'Fullmetal Alchemist' ]);

    // FUNCIONES
    /* Manejador de Inserción de una Categoría */
    const handleCategory = (newCategorie) => {
        const upperCategories = categories.map(category => category.toUpperCase());

        if (upperCategories.includes(newCategorie.toUpperCase())) return;

        setCategories([ newCategorie, ...categories ]);
    }

    // RETORNO
    return (
        <>
            { /* Título */ }
            <h1 className={ h1Style }> GifExpert App </h1>

            { /* Input de Búsqueda */ }
            <AddCategory handleCategory={ handleCategory } />

            { /* Listado de Gifs */ }
            {categories.map(category => 
                <GifsGrid 
                    key={ category }
                    gifsCategory={ category }
                    gifsQty={ 9 }
                />
            )}
        </>
    );
}

/* __________________________________________________________________________________________________________

NOTAS:
    1. Los Functional Components nunca deben tener la ejecución directa de una función, ya que estas se
volverán a ejecutar cada vez que se rendericen dichos componentes 
__________________________________________________________________________________________________________ */
