//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'

const MyCard= (props)=>{

    return (
               
        <Card className="m-3 p-5"style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
            <Tags colorBoton={props.colorBoton} textBoton={props.textBoton} />
          </Card.Body>
        </Card>
        
      );
}

export default MyCard;