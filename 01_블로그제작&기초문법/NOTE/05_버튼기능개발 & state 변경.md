## 05_버튼 기능 개발 

##### 1. `onClick={}` 안엔 함수 이름을 넣어야 한다. 

```react
  function 함수() {
    console.log(1);
  }
```

```react
<h4>{Title[0]}
          <span onClick={ 함수 }>👍</span> {good}
</h4>
```

> * 함수 : 긴 코드를 한 단어로 묶어주는 문법 
>
> span 태그를 클릭하면 함수를 실행하도록 만들어주는 코드 

```react
<h4>{Title[0]}
<span onClick={ function(){ console.log(1) } }>👍</span> {good}
</h4>
```

> 함수 만드는 문법 바로 넣어도 상관없다. 
>
> `()=>{}` 도 함수 만드는 문법임 

---

```react
<div className='list'>
   <h4>{Title[0]}
          <span onClick={() => { good + 1 }}>👍</span> {good}
    </h4>
        <p>9월 26일 발행</p>
</div>
```

> state 는 등호로 변경하면 안된다.(html 적용안됨) state를 변경하고 싶다면, 다음과 같은 코드 처럼 작성해야 한다. 그래야 재렌더링도 잘된다. 

```react
 let [good, goodChange] = useState(0);

<div className='list'>
   <h4>{Title[0]}
    <span onClick={() => { goodChange(good+1) }}>👍</span> {good}
    </h4>
    <p>9월 26일 발행</p>
</div>
```

> ` goodChange(1) ` 변경할 값을 `()` 에 넣어주기 



##### 2.  최종 코드 

> `최고` 이모티콘 버튼을 누를 때마다 좋아요 수 올라가기 

```react
let [good, goodChange] = useState(0);
<div className='list'>
 <h4>{Title[0]}
  <span onClick={() => { goodChange(good + 1) }}>👍</span>{good}
 </h4>
 <p>9월 26일 발행</p>
</div>
```



---

* 복습할 내용 

  > 1. `onClick` 사용하는 법 
  >
  >    `onClick={}` 안에 함수 넣어야 함
  >
  > 2. `state` 변경하는 법 
  >
  >    state변경함수(새로운 state)