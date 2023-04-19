
import "./App.css";
import {Nav,
  Navbar,Carousel,Form,Button,Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Manjunadh</h1>
    <h1>M. Shyam Sundar</h1>
    <h1> G.RAVIKUMAR</h1>
    <Navbar bg="warning" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ backgroundColor: "white" }} href="#">
            INDIAN ARMY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">ABOUT</Nav.Link>

              <Nav.Link href="#">POLICIES</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ADGPI_Indian_Army.svg/800px-ADGPI_Indian_Army.svg.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src="https://m.economictimes.com/thumb/msid-88874234,width-1599,height-951,resizemode-4,imgsize-277080/ladakh-indian-army-soldiers-during-a-special-event-narrating-the-stories-of-ope-.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src="https://static.theprint.in/wp-content/uploads/2020/02/Indian-Army-3.jpg?compress=true&quality=80&w=376&dpr=2.6"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src="https://cloudfront-us-east-1.images.arcpublishing.com/archetype/6OASREW43BBTXOLP2RWARFB6PQ.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
