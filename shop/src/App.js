import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react"
import data from "./data.js"
import Detail from './pages/Detail.js'
import axios from 'axios'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [product, setProduct] = useState(data)
  let navigate = useNavigate()
  let [loding, setLoding] = useState(false)
  let [count, setCount] = useState(1)

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
                    return <Product_List product={product[i]} i={i} key={i}/>;
                  })}
                </div>
              </div>{" "}

              {
                loding === true ?  <LodingUI /> : null
              }

              <button onClick={ async ()=>{
                // 'async'는 비동기 작업을 수행할 것임을 나타낸다.
                try {
                setLoding(true);    // 로딩중 UI 띄우기
                console.log('1. 더보기 눌렀음. 로딩UI 활성화');
                let url = '';
                if(count === 1){
                  url = 'https://gist.githubusercontent.com/hocube/1da7412e8d567e9d7a728403517ab974/raw/8ee61feac6da846fbd7367e7ee6955ca76e2fb91/product.json';
                  console.log('2. url 결정. count 1');
                } else if (count === 2){
                  url = 'https://gist.githubusercontent.com/hocube/a4481db778a2543a901504d478ace598/raw/52d3e0fd3199eaaac5600db1329d9adccbf45bf5/product2.json';
                  console.log('2. url 결정. count 2');
                } else {
                  alert("상품이 없습니다");
                  setLoding(false);  // 로딩중 UI 숨기기
                  return;
                }

                const result = await axios.get(url);
                // 'await'는 axios.get(url)의 작업이 완료될 때까지 기다린다.
                // 작업이 완료되면 그 결과를 result에 저장한다.
                console.log('3. 데이터 요청.');

                setTimeout(() => {
                  setProduct([...product, ...result.data]); // 상품 목록 업데이트
                  setLoding(false);   // 로딩중 UI 숨기기
                  setCount(count+1);
                }, 2000); // 2초 후 로딩 UI 비활성화
                
                } catch(error){
                  console.log('API 호출 중 오류 발생:', error);
                  setTimeout(() => {
                    setLoding(false); // 로딩 UI 비활성화
                  }, 2000); // 2초 후 로딩 UI 비활성화
                }
                console.log('4. 2초 후에 상품 목록을 업데이트하고 로딩 UI를 비활성화');
              }}>더보기</button>

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

function LodingUI(){
  return(
    <div className="alert alert-warning">로딩중 입니다.</div>
  )
}

export default App;
