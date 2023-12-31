## 04_중요한 데이터는 state 에 담기 

##### 1. 글 목록 UI 코드 작성 

```react
 <div className='list'>
        <h4>Title</h4>
        <p>9월 26일 발행</p>
 </div>
```

```CSS
div {
  box-sizing: border-box;
}

.list {
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid gray;
}
```

> ![image](https://github.com/oiosu/React-PJT/assets/99783474/acb672c2-03d5-4f36-a22f-5b5e7fa763ce)




##### 2.  `return()` 안에는 병렬로 태그 2개 이상 기입 금지 

![image](https://github.com/oiosu/React-PJT/assets/99783474/81851cbb-93bd-4422-b879-7d9649b3bb1e)



```react
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
```



##### 3. About state

> 자료를 잠깐 저장할 땐 변수에 담아 사용해도 되지만, 리액트에서는 `state`를 사용해도 된다. 

(1) import { useState }

```react
import { useState } from 'react';
```

(2) useState(보관할 장소)

```react
let [a, b] = useState('남자 가디건 추천')
```

> useState에 담긴 정보를 사용하고 싶다면 `let [작명,  작명]`  앞에 선언해줘야 한다. 

> `let [a, b]`
>
> * `a` : state에 보관했던 자료 
> * `b` : state 변경 도와주는 함수 
> * 작명은 직관적으로 작성하기 

---

##### ◼ Destructuring 문법 

```javascript
let num = [1, 2];
let a = num[0];
let c = num[1];
```

```javascript
let num = [1, 2];
let [a, c] =[1, 2];
```

> array 안에 있던 자료들을 각각 변수로 빼주는 문법이다. 

---



##### 🔥 새로운 문법 배운 후 언제 사용할지 생각해봐야한다. 

> ====> state 는 갑자기 병경 되면 자동으로 html  재렌더링이 되기 때문에 변수 선언 대신 state를 사용하는 것이 좋다. 
>
> > ##### 변동 시 자동으로 html에 반영되게 만들고 싶으면 state 사용한다. 





##### 🔥 자주변경될것 같은 html 부분은 state로 만들기 

---



◼ useState 숙제 

```react
function App(){
 
  let [글제목, b] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}
```

> * 한 곳에 여러개의 문자를 집어넣고 싶으면 [ ] 대괄호안에다가 문자들 끼워넣고 콤마로 구분
> *  array자료형



