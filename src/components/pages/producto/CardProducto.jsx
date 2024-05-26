import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CardProducto = ({ producto, setProductos}) => {

  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src={producto.imagen} alt={producto.nombreProducto} className='card-img-top-nueva' />
        </div>
        <Card.Body>
        <Card.Title className="primary-font">{producto.nombreProducto}</Card.Title>
        <Card.Text>
          Descripción:  {producto.descripcion_breve}<br className="mb-2"/> 
          <span className="fw-bold">Precio: $ {producto.precio}</span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Link className='btn btn-dark me-2' to={`/detalle/${producto.id}`}>Ver más</Link>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
