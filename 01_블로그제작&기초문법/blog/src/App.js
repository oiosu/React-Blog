import logo from './logo.svg';
import './App.css';

function App() {

  let post = '광화문 우동 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Su kyung BLOG</h4>
      </div>
      <div className='list'>
        <h4>Title</h4>
        <p>9월 26일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
