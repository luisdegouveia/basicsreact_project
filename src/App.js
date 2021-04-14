import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'

function App() {

  //creamos un listado de productos 
  //se pasan dos valores, el primero es el state (productos)
  //el segundo valor, es una funcion que ayuda a reescribir el state
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa Roja', precio: 50 }, 
    { id: 2, nombre: 'Camisa Azul', precio: 40 }, 
    { id: 3, nombre: 'Camisa Blanca', precio: 30 }, 
    { id: 4, nombre: 'Camisa Negra', precio: 20 }, 
  ]);

  //obtener la fecha 
  const fecha = new Date().getFullYear();

  return (
    <Fragment>

        <Header 
          titulo='Tienda Virtual'
        />

        <h1>Lista de Productos</h1>

        {productos.map( producto => (
          <Producto
            key={producto.id} 
            producto={producto}
          />
        ) )}
        
        <Footer 
          fecha={fecha}
        />

    </Fragment>
  );
}

export default App;
