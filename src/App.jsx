import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Footer from './components/Footer';

import './App.css';
import MyCard from './components/MyCard'; 
import Header from './components/Header';
/*import "./index.css";*/

  function App() {  
    /// va toda la logica javascript
    return (
      <div className='Main'>
                <div className="Titulo">
                    <Header nombre="Adopta un perrito"/>
                </div>

              <Container className="d-flex ">           
                <Row className="xs=1 sm=2 md=4 lg=5 d-flex justify-content-center">
                
                     <MyCard img="https://www.rionegro.com.ar/wp-content/uploads/documents/1/0/image_content_9666375_20180514132155.jpg"  
                     title="Perro 1"  
                     text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." 
                     colorBoton="success"
                     textBoton="ingresar"
                     /> 
                
                     <MyCard img="https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/m-fotos-de-perros.html-2.jpg"  
                     title="Perro 2"  
                     text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." 
                     colorBoton="warning"
                     textBoton="ingresar"
                     />

                     <MyCard img="https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/m-fotos-de-perros.html-0-4.jpg"  
                     title="Perro 3"  
                     text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." 
                     colorBoton="danger"
                     textBoton="ingresar"
                     />
                
                    <MyCard img="https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/m-fotos-de-perros.html-7.jpg"  
                     title="Perro 4"  
                     text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." 
                     colorBoton="primary"
                     textBoton="ingresar"
                     />
                
                    <MyCard img="https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/m-fotos-de-perros.html-0-0.jpg"  
                     title="Perro 5"  
                     text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." 
                     colorBoton="info"
                     textBoton="ingresar"
                     />
                 </Row>
                
           </Container>           
        <div className="pie">
        <Footer/>               
        </div>             
            
       </div>
       

  );
}
export default App;

