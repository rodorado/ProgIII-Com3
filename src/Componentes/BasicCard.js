import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../imagenes/react.jpg'

function BasicCard() {
  return (
    <div> 
    <h2>Tarjeta</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Titulo de la tarjeta</Card.Title>
        <Card.Text>
          Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
        </Card.Text>
        <Button variant="primary">Ir a alguna parte</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicCard;