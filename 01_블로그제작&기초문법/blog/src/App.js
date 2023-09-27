/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 부모 컴포넌트 
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

      {
        Title.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(true) }}>
                {Title[i]}
                <span onClick={() => { goodChange(good + 1) }}>
                  👍
                </span> {good} </h4>
              <p>9월 27일 발행</p>
            </div>
          )
        })
      }


      {
        modal == true ? <Modal TitleChange={TitleChange}
          color={'blue'}
          Title={Title} /> : null
      }

    </div>
  );
}

// 모든 변수는 함수 탈출 불가이다. 

// function 만들 시, 다른 function 밖에 만들어주기 
//자식 컴포넌트
function Modal(props) {
  return (
    <div className='modal'
      style={{ background: props.color }}>
      <h4>{props.Title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        props.TitleChange(
          ['여자코트추천', 'Title2', 'Title3']
        )
      }}>글 수정</button>
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
