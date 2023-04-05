// // ---- Prueba para verificar si el componente Home se renderiza correctamente:----
// import React from 'react';
// import { render } from '@testing-library/react';
// import Home from '../src/components/Home';

// test('renders Home component correctly', () => {
//   const { getByText } = render(<Home />);
//   // Verifica si se encuentra el artículo con título "home__content"
//   expect(getByText('home__content')).toBeInTheDocument();
// });

// ---- Prueba para verificar si el estado de stateValue se actualiza correctamente cuando se llama a updateStateValue:----

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Home from '../src/components/Home';

// test('updates stateValue correctly when updateStateValue is called', () => {
//   const { getByText } = render(<Home />);
//   const updateButton = getByText('Update'); // Asumiendo que hay un botón con el texto "Update" que llama a updateStateValue
//   fireEvent.click(updateButton);
//   // Verifica si el valor de stateValue se ha actualizado a true después de hacer clic en el botón "Update"
//   expect(updateButton).toHaveClass('home__left_active');
// });

// ---- Prueba para verificar si el estado de stateValue se actualiza correctamente cuando se llama a updateStateValue:----

// import React from 'react';
// import { render } from '@testing-library/react';
// import Home from '../src/components/Home';
// import Mycontext from '../src/context/contextActive';

// test('provides Mycontext correctly to Sidebar component', () => {
//   const { getByTestId } = render(
//     <Mycontext.Provider value={{ contextValue: true, setContextValue: jest.fn() }}>
//       <Home />
//     </Mycontext.Provider>
//   );
//   const sidebarComponent = getByTestId('sidebar'); // Asumiendo que el componente Sidebar tiene un atributo de prueba "data-testid" con el valor "sidebar"
//   // Verifica si Sidebar recibe correctamente el contexto de Mycontext
//   expect(sidebarComponent).toHaveAttribute('value', 'true');
// });


// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';
// import Favorites from '../src/components/Favorites';

// // Mock react-redux useSelector hook
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
// }));

// // Mock react-router-dom useParams hook
// jest.mock('react-router-dom', () => ({
//   useParams: jest.fn(),
// }));

// describe('Favorites component', () => {
//   beforeEach(() => {
//     // Mock the redux store state
//     useSelector.mockReturnValue({
//       favorites: [
//         { id: 1, name: 'Rick', species: 'Human', gender: 'Male', image: 'rick.jpg' },
//         { id: 2, name: 'Morty', species: 'Human', gender: 'Male', image: 'morty.jpg' },
//       ],
//     });

//     // Mock the URL parameter
//     useParams.mockReturnValue({ ID: 1 });
//   });

//   test('renders favorite characters', () => {
//     render(<Favorites />);

//     // Assert that the rendered favorite characters' names are present
//     expect(screen.getByText('Rick')).toBeInTheDocument();
//     expect(screen.getByText('Morty')).toBeInTheDocument();
//   });

//   test('renders empty message when no favorites', () => {
//     // Mock an empty favorites array in the redux store state
//     useSelector.mockReturnValue({ favorites: [] });

//     render(<Favorites />);

//     // Assert that the empty message is present
//     expect(screen.getByText('')).toBeInTheDocument();
//   });
// });
