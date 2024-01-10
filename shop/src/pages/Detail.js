import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

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

  let{id} = useParams();
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)     // true로 바꾸면 노란박스 보이게, false로 바꾸면 안보이게.
  let [num, setNum] = useState('')

  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(false)}, 2000)
    return()=>{
      clearTimeout(timer);
    }
  }, [])

  useEffect(()=>{
    if(isNaN(num) == true){
      alert('이시키야 한글입력해라')
    }
  }, [num])

  return (
    <div className="container">
      {
         alert == true
         ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={props.product[id].img} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <input onChange={ (e)=>{setNum(e.target.value)} } />
          <h4 className="pt-5">{props.product[id].title}</h4>
          <p>{props.product[id].content}</p>
          <p>{props.product[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <YellowBtn bg="orange">장바구니</YellowBtn>
        </div>
      </div>
    </div>
  );
}

export default Detail;