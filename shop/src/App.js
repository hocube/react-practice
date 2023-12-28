import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">냥냥댕댕</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/feed.jpg'} />
            <h5>강아지사료 웰비 스타 5kg</h5>
            <p>34,900원</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/nutrients.png' } />
            <h5>멍멍비타 면역력 강아지 영양제 베타글루칸 1개월분 90g</h5>
            <p>28,800원</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/snack.jpg' } />
            <h5>모모 고구마사사미 300g X 5개 강아지간식</h5>
            <p>13,000원</p>
          </div>
      </div>
</div> 
    </div>
  );
}

export default App;
