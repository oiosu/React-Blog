## 10_props

* 자식이 부모가 가지고 있던 state 사용이 가능하다

⭐ props 전송은 부모 ==> 자식만 가능하다 

> <App> : 부모 컴포넌트 , <Modal> : 자식 컴포넌트 
>
> <App> ======state=======> <Modal>
>
> > 전송할 때는 **props** 라는 것을 이용해서 전송하기 



##### ◼ 부모 ====> 자식 state 전송하는 법 (props) Step2

##### 1.  `<자식 컴포넌트 작명 = {state이름}>

```react
modal == true ? <Modal 작명={Title} /> : null
```

##### 2. props 파라미터 등록 후 `props.작명` 사용

```react
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.작명}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```



---

```react
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.Title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

---

* 색깔 변경도 `props` 를 통해 코드 작성이 가능하다. 

```react
modal == true ? <Modal color={'blue'} Title={Title} /> : null	
```

```react
function Modal(props) {
  return (
    <div className='modal'
      style={{ background: props.color }}>
      <h4>{props.Title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

> 함수 파라미터 문법과 유사하다, 
>
> 파라마터 문법은 다양한 기능을 하는 함수를 만들 때 사용한다. 
>
> (실은 props도 파라미터 문법일 뿐이다.)
>
> props로 일반 문자도 전송도 가능하다 



---

* 글 수정 버튼 누르면 첫 글 제목이 `여자코트 추천` 으로 바뀌어야 함 

