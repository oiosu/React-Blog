/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [Title, b] = useState(['Title1', 'Title2', 'Title3']);
  let [good, goodChange] = useState(0);
  let [modal, setModal] = useState('true');

  return (
    <div className="App">

      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <Top></Top>

      <button onClick={() => {
        let copy = [...Title];
        copy[0] = '여자코트 추천';
        copy.sort();
        b(copy);
      }}>글 제목 수정</button>

      <div className='list'>
        <h4>{Title[0]}
          <span onClick={() => { goodChange(good + 1) }}>👍</span> {good}
        </h4>
        <p>9월 26일 발행</p>
      </div>
      <div className='list'>
        <h4>{Title[1]}</h4>
        <p>9월 26일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(true) }}>{Title[2]}</h4>
        <p>9월 26일 발행</p>
      </div>

      {
        modal == true ? <Modal /> : null
      }

    </div>
  );
}

// function 만들 시, 다른 function 밖에 만들어주기 
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function Top() {
  return (
    <div className='top'>
      <p>React 마스터 하고 싶어요</p>
    </div>
  )
}

export default App;
