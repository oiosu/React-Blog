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

> ![image-20230926153701920](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926153701920.png)

##### 

##### 2.  `return()` 안에는 병렬로 태그 2개 이상 기입 금지 

![image-20230926153918042](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926153918042.png)

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



