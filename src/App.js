/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '다산 우동 맛집';
  let [글제목, b] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'skyblue', fontSize : '20px'} }> 지호의 블로그 </h4>
      </div>
      <div className='list'>
      <h4>{ 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span> {좋아요} </h4>
      <p>12월 21일 발행</p>
      </div>

      <div className='list'>
      <h4>{ 글제목[1] }</h4>
      <p>12월 21일 발행</p>
      </div>
      <div className='list'>
      <h4>{ 글제목[2] }</h4>
      <p>12월 21일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
