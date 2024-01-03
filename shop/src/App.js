import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react"
import data from "./data.js"
import Detail from './pages/Detail.js'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [product] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">냥냥댕댕</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
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
        <Route path="/detail/:id" element={<Detail product={product} />} />

        <Route path="*" element={<div>없는 페이지 입니다.</div>} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 영양제 체험팩 서비스</div>} />
          <Route path="two" element={<div>반려동물 생일기념 쿠폰 증정</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4> 냥냥댕댕은 반려동물 쇼핑몰 입니다.</h4>
      <Outlet></Outlet>
    </div>
  )
} 

function Product_List(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + props.product.img} style={{ width: "60%" }} />
      <h5>{props.product.title}</h5>
      <p>{props.product.content}</p>
      <p>{props.product.price.toLocaleString() + "원"}</p>
    </div>
  );
}

export default App;
