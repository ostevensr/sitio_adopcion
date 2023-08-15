import Badge from 'react-bootstrap/Badge';

function BasicExample(props) {
  return (
      <h6>
        <Badge bg={props.color}>{props.textotag}</Badge>
      </h6>
  );
}
export default BasicExample;