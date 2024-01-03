import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react"
import data from "./data.js"
import Detail from './Detail.js'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [product] = useState(data);

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

      <Routes>
        <Route path="/" element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {product.map((a, i) => {
                    return <Product_List product={product[i]} />;
                  })}
                </div>
              </div>{" "}
            </div>
          }
        />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </div>
  );
}

function Product_List(props) {
  return (
    <div className="col-md-4">
      <img
        src={process.env.PUBLIC_URL + props.product.img}
        style={{ width: "60%" }}
      />
      <h5>{props.product.title}</h5>
      <p>{props.product.content}</p>
      <p>{props.product.price.toLocaleString() + "원"}</p>
    </div>
  );
}

export default App;
