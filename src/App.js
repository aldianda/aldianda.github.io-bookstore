// import logo from './logo.svg';
// import './App.css';
import Book from './Component/page/book';
import {Routes, Route, useNavigate} from "react-router-dom";
import BookDetail from './Component/page/book-detail';
import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

const App = () => {
  const navigate = useNavigate();
  return (
      <div>
        <div>
        <Navbar bg="warning" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">BookStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        <div>
          <Routes>
            {/* <Route path="/" element={<App/>}/> */}
            <Route path='/' element={<Book/>}></Route>
            <Route path="/book/:isbn" element={<BookDetail/>}/>
            <Route path='*' element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>} />
          </Routes>
        </div>
      </div>
      
  )
    
}

export default App;
