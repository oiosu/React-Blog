import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [Title1, blogTitle] = useState('Title_1')

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{Title1}</h4>
        <p>9월 26일 발행</p>
      </div>
      <div className='list'>
        <h4>.</h4>
        <p>9월 26일 발행</p>
      </div>
      <div className='list'>
        <h4>.</h4>
        <p>9월 26일 발행</p>
      </div>
    </div>
  );
}

export default App;
