/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '다산 우동 맛집';
  let [글제목, 글제목변경] = useState(['강아지 이름 추천', '홍대 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); 

  [1,2,3].map(function(a){
    return '123123123'
  })

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

      {
        modal ==  true ? <Modal/> : null
                          //참     //거짓
      }

      {
        글제목.map(function(a, i){
          return (
          <div className='list'>
            <h4>{ 글제목[i] } 
              <span onClick={()=>{
                let copy좋아요 = [...좋아요];
                copy좋아요[i] = copy좋아요[i]+1;
                좋아요변경(copy좋아요)}}>👍</span> {좋아요[i]} 
            </h4>
            <p>12월 21일 발행</p>
          </div>
          )
        })
      }
    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
