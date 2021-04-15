import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'


function App() {

  //creamos un listado de productos 
  //se pasan dos valores, el primero es el state (productos)
  //el segundo valor, es una funcion que ayuda a reescribir el state
  //el state NO se debe modificar directamente, se debe usar la funcion.
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa Roja', precio: 50 }, 
    { id: 2, nombre: 'Camisa Azul', precio: 40 }, 
    { id: 3, nombre: 'Camisa Blanca', precio: 30 }, 
    { id: 4, nombre: 'Camisa Negra', precio: 20 }, 
  ]);

  //State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

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
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
          />
        ) )}

        <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
        />
        
        <Footer 
          fecha={fecha}
        />

    </Fragment>
  );
}

export default App;
