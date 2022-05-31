/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['커피 맛집 추천', '디저트 맛집', '길음역 맛집']);
  let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목]; //deep copy != 값공유
    newArray[2] = '상계역 맛집';
    글제목변경( newArray);
  }

  return (
    <div className="App">
      <div class = "black-nav">
        <div>niley's blog</div>
      </div>
      <div className = "list">
        <h3> { 글제목[0] } <span onClick = { ()=>{ 좋아요변경(좋아요 + 1) } }>❤️</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목[2] } <button onClick = { 제목바꾸기 }>😊</button> </h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
      
    </div>
  );
}

function Modal(){
  return (
    <div className= "modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  ) //return 안의 <div>태그는 한 개만 쓸 수 있으므로 여러개 만들 시 하나로 묶기
}

export default App;
