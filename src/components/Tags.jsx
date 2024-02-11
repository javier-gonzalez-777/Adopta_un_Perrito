/*import { Button } from 'react-bootstrap';*/
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const Tags= ({colorBoton,textBoton})=>{
  
    return (
        <Badge bg={colorBoton}>{textBoton}</Badge>
     
    );
}

export default Tags;