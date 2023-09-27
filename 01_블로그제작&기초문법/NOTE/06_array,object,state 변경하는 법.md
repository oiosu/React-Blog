## 06_array,object,state 변경하는 법 

---

* 일부만 바꿔서 state 변경함수에 넣는 방법 생각해보기. 
* array/object 다룰 때 원본은 보존하는게 좋다. (=copy 만들기)

```react
<button onClick={() => {
     let copy = Title;
     copy[0] = '여자코트 추천';
     b(copy);
}}>글 제목 수정</button>
```

> 위와 같은 코드로 작성하면 동작이 안됨 

```react
      <button onClick={() => {
        let copy = [...Title];
        copy[0] = '여자코트 추천';
        b(copy);
      }}>글 제목 수정</button>
```

> ` [...Title];`  : 점 3개를 추가하면 동작이 됨 

============> 동작 원리를 많이 알면 나중에 응용을 잘 할 수 있다. 

(왜 점 3개를 추가하면 동작이 잘되는지 알아보기 =====> 2가지 )

##### (1)  state 변경함수 특징

![image-20230927092256011](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230927092256011.png)

> `기존 state == 신규 state` 의 경우 변경 안해줌 

##### (2) array, object 특징 

* array, object 담은 변수엔 화살표만 저장됨 

```react
let arr = [1, 2, 3];
```

> `[1, 2, 3]` 이 어딨는지 알려주는 화살표만 들어있다. 

![image-20230927092745276](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230927092745276.png)



```react
글제목[0] = '여자코트 추천';
글제목변경(글제목);
```

![image-20230927093055709](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230927093055709.png)

> `남자코트` =====> `여자코트`
>
> : array를 수정했지 변수에 있던 화살표는 수정안됨 
>
> ===> 기존state와 신규 state와 같다고 생각하기 때문



* 변수1 & 변수2 화살표가 같으면 `변수1 == 변수1` 비교해도 `true` 가 나온다.
* array, object는 **reference data type** 이라서 그렇다.

* `[...Title]` 의 점 3개 : 괄호 벗겨 주세요 라는 뜻, 따라서 괄호 벗고 다시 `[]` 를 작성하니 독립적인 array 가 된다. 이러면 화살표도 달라진다. 

* state가 array/object면 독립적 카피본을 만들어서 수정해야 한다.

  > `독립적 카피본` 을 `shapplow copy` 라고 부른다. 



---

##### ✔  버튼 누르면 글 제목 가나다순 정렬 기능 만들기 

* Hint : html을 어떻게 정렬할까 고민안해도 되고 글제목 state를 가나다순으로 정렬 (왜냐면 state 변경하면 관련된 html은 자동으로 재렌더링 되니까요 )

```react
<button onClick={() => {
    let copy = [...Title];
    copy[0] = '여자코트 추천';
    copy.sort();
    b(copy);
}}>글 제목 수정</button>
```

