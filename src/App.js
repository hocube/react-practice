/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '다산 우동 맛집';
  let [글제목, 글제목변경] = useState(['강아지 이름 추천', '홍대 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'skyblue', fontSize : '20px'} }> 지호의 블로그 </h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];  //글제목에 대한 copy본을 하나 만든다.
        copy[1] = '다산 김밥 맛집'; //copy본의 [0]배열껄 수정한다.
        글제목변경(copy);
        }}>글수정</button>
      
      <button onClick={()=>{
        let copy1 = [...글제목];
        copy1 = [...글제목].sort();
        글제목변경(copy1);
      }}>가나다정렬</button> 

      {
        글제목.map(function(a, i){
          return (
          <div className='list' key={i}>
            <h4 onClick={()=>{ setModal(true); setTitle(i)}}>{ 글제목[i] } 
              <span onClick={(e)=>{ e.stopPropagation();
                let copy좋아요 = [...좋아요];
                copy좋아요[i] = copy좋아요[i]+1;
                좋아요변경(copy좋아요)}}>👍</span> {좋아요[i]} 
            </h4>
            <p>12월 21일 발행</p>
            <button onClick={()=>{
              let copy삭제 = [...글제목];
              copy삭제.splice(i, 1);
              글제목변경(copy삭제);
            }}>삭제</button>
          </div>
          )
        })
      }

      <input onChange={(e)=>{입력값변경(e.target.value); }}/>
      <button onClick={()=>{
        let copy=[...글제목];  
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button> 

      {
        modal ==  true ? <Modal 글제목={글제목} title={title}/> : null
      }

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span> {좋아요} </h4>
        <p>12월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>12월 21일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>12월 21일 발행</p>
      </div> */}

    </div>
  );
}

function Modal(props) {
  return(
    <div className='modal'>
        <h4> {props.글제목[props.title]} </h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;
