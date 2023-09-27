## 07_Component 

#### : 많은 div들을 한 단어로 줄이고 싶으면 

![image](https://github.com/oiosu/React-PJT/assets/99783474/b3691970-2ec9-4572-abe4-8be47f6934ca)


#### ✔ 컴토넌트 만드는 법 

(1) function 만들고 

```react
// function 만들 시, 다른 function 밖에 만들어주기 
function Modal() {
  return (

  )
}
```

(2) return() 안에 html 담기 

```react
// function 만들 시, 다른 function 밖에 만들어주기 
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

(3) <함수명></함수명> 쓰기 

```react
        <p>9월 26일 발행</p>
      </div>

      <Modal></Modal>
    
	</div>
  );
}
```



* 의미 없는 `<div>` 대신 `<></>` 사용가능 

```react
function Modal() {
  return (
    <>
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
   </>
  )
}
```



* <함수명></함수명> , </함수명> 둘다 가능 

```react
<Modal></Modal>
</Modal>
```



#### ✔ 어떤 걸 컴포넌트로 만들면 좋은가 

(1) 반복적인 html 축약할 때 

(2) 큰 페이지들 

(3) 자주변경되는 것들 



* 컴포넌트의 단점 : state 가져다 쓸 때 문제가 생긴다.

(A 함수에 있던 변수는 B 함수에서 맘대로 가져다 쓸 수 없다. ) 



* 컴포넌트 만드는 문법 (2)

```react
const Modal = () => {
    return (
        <div></div>
    )
}
```



---



◼ 다른 component 만들기 