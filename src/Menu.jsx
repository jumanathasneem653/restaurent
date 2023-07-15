import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Menu.css";

export default function App() {


  return (
    <div>
      
      <Container>
        
      <h1 className="title">SWEET CORNER</h1>
            <Row>
              <Col>
            <Card  className="card">
            <Card.Img variant="top" src="http://4.bp.blogspot.com/-4X6FrSPaLBA/UPLpCDlddyI/AAAAAAAACbE/57cpietOrmI/s1600/IMG_1352.JPG" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>Coffee</Card.Title>
                <Card.Text>$10</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>

             <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://i.pinimg.com/originals/82/61/d1/8261d1a122b2239e732bc1d55576cde1.jpg" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>Cake</Card.Title>
                <Card.Text>$20</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
          );
        {/* })} */}
        </Col>

        

            <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://i.pinimg.com/736x/bb/49/4a/bb494a94bd3aa0a0e1af5d4d51aae063.jpg" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>cup cake</Card.Title>
                <Card.Text>$20</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
        </Row>

        <Row>
        <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://restaurantesenpereira.com/Archivos/Articulos/00000212-pancakes-de-cafe.png" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>pancake</Card.Title>
                <Card.Text>$15</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>Ice cream</Card.Title>
                <Card.Text>$10</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/sweet-fresh-strawberry-juice-wooden-table-healthy-food_136875-546.jpg?size=626&ext=jpg" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>juice</Card.Title>
                <Card.Text>$15</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
            
        </Row>

        <Row>
        <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://cdn.cdkitchen.com/recipes/images/2016/04/44791-5762-mx.jpg" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>Mojito</Card.Title>
                <Card.Text>$12</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://image.freepik.com/foto-gratis/cafe-donuts_1339-6165.jpg" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>Donut</Card.Title>
                <Card.Text>$18</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card  className="card">
            <Card.Img variant="top" src="https://i.pinimg.com/originals/1e/ce/86/1ece86a68ed5e5867eaa4110212efb1e.jpg" alt="Dish Image" />
              <Card.Body>
              {/* <Card.Title>Blog number </Card.Title> */}
              <hr />
                <Card.Title>Brownie</Card.Title>
                <Card.Text>$25</Card.Text>
                <Button style={{backgroundColor: '#242424', color: 'white'}}>order now</Button>
              </Card.Body>
            </Card>
            </Col>
            
        </Row>
      </Container>
    </div>
  );
}