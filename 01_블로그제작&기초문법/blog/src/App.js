/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [Title, b] = useState(['Title1', 'Title2', 'Title3']);
  let [good, goodChange] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...Title];
        copy[0] = '여자코트 추천';
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
        <h4>{Title[2]}</h4>
        <p>9월 26일 발행</p>
      </div>
    </div>
  );
}

export default App;
