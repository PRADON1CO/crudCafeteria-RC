import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarProductos } from "../helpers/queries";

const Administrador = () => {

  const [productos, setProductos] = useState([])

  useEffect (() => {
    obtenerProductos()
  }, [])

  const obtenerProductos = async() => {
    const respuesta = await listarProductos();
    if(respuesta.status === 200){
      //guardo los productos en el state
      const datos = await respuesta.json();
      setProductos(datos)
    }else{
      //Mostrar un mensaje al usuario
    }
    
  }

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to={'/administrador/crear'}>
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((itemProducto)=> <ItemProducto key={itemProducto.id} producto={itemProducto}></ItemProducto>)
          }
          
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
