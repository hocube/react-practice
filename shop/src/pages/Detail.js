import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Context1 } from "./../App.js";
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";


let YellowBtn = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  height: 40px;
  border: 0px;
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  `;

function Detail(props) {
  let {stock} = useContext(Context1)
  
  let{id} = useParams();
  let 찾은상품 = props.product.find(x => x.id == id)
  let [count, setCount] = useState(0)
  let [showAlert, setShowAlert] = useState(true)     
  let [showDiscountAlert, setShowDiscountAlert] = useState(true); // true로 바꾸면 노란박스 보이게, false로 바꾸면 안보이게.
  let [num, setNum] = useState('')
  let [tap, setTap] = useState(0)
  let [DetailFade, setDetailFade] = useState('')
  let dispatch = useDispatch()
  let navigate = useNavigate()
  
  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거=JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)

    // set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])

  useEffect(()=>{
    setTimeout(()=>{ setDetailFade('end') }, 400)
    // setDetailFade('end')
    return ()=>{
      setDetailFade('')
    }
  }, [])

  useEffect(()=>{
    let timer = setTimeout(()=>{setShowDiscountAlert(false)}, 2000)
    return()=>{
      clearTimeout(timer);
    }
  }, [])

  useEffect(()=>{
    if(isNaN(num) == true){
      alert('한글입력해라')
    }
  }, [num])

  return (
  <div className={'container start ' + DetailFade}>
    <div className="container">
      {
         showDiscountAlert == true
         ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null
      }

     <div>{stock}</div>

      <div className="row">
        <div className="col-md-6">
          <img src={props.product[id].img} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <input onChange={ (e)=>{setNum(e.target.value)} } />
          <h4 className="pt-5">{props.product[id].title}</h4>
          <p>{props.product[id].content}</p>
          <p>{props.product[id].price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem( {id : 1, name : '냥이 치약', count : 27} ))
            navigate('/cart')
          }}>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">상세정보</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">구매후기</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">상품문의</Nav.Link>
      </Nav.Item>
    </Nav>

    <TapContent tap={tap}/>

    </div>
  </div>
  );
}

function TapContent({tap}){

  let [fade, setFade] = useState('')

  // tap state가 변할 때 end 부착
  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
    return ()=>{
      setFade('')
    }
  }, [tap])

  return (<div className={'start ' + fade}>
    { [<div>많이 사줘라</div>, <div>강아지한테 좋대요 멍멍</div>, <div>고양이도 먹어도 될까요????</div>][tap] }
  </div>)

  /* if (tap == 0){
    return <div>내용0</div>
  } 
  if (tap == 1){
    return <div>내용1</div>
  } 
  if (tap == 2){
    return <div>내용2</div>
  } */
}

export default Detail;