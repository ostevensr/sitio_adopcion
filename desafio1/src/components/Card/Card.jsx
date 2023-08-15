import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Tags from '../Tags/Tags.jsx'

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">

        <ListGroup.Item>{props.direcc}</ListGroup.Item>

        <ListGroup.Item> <Tags color={props.color} textotag={props.textotag}/> </ListGroup.Item>

      </ListGroup>

    </Card>
  );
}

export default KitchenSinkExample;