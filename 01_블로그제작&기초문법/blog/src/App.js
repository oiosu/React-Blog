import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{Title}</h4>
        <p>9월 26일 발행</p>
      </div>
    </div>
  );
}

export default App;
