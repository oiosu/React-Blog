## 09_map()

#### : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때 



* #### map 사용법 

##### 1. array 자료 갯수 만큼 함수안의 코드를 실행시킨다. 

```react
[1, 2, 3].map(__콜백함수__)
```

##### 2. 함수의 파라미터는 array안에 있던 자료이다. 

```react
[1, 2, 3].map(function(a){
    console.log(a)
})
```

##### 3. return 에 적으면 array로 담아준다. 

```react
[1, 2, 3].map(function(a){
    retrun __________
})
// 3개 이기 때문에 3번 담아 줄 것이다. 
```



* `map()` 으로 같은 html 반복생성하는 법 

```react
{
    [1, 2, 3].map(function () {
      return <div>안녕</div>
    })
}
```

![image-20230927135640329](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230927135640329.png)

> 리액트는 array 안에 html 담아놔도 잘 보여준다. 

```react
  {
    [1, 2, 3].map(function () {
      return (
        <div className='list'>
          <h4>{Title[1]}</h4>
          <p>9월 27일 발생</p>
        </div>
      )
    })
  }
```

> 하지만 실제 글이 100개라면, 위와 같은 코드는 한계가 있을 수 있다.



* 실제 블로그 글갯수만큼 html 생성하기 

```react
  {
    Title.map(function () {
      return (
        <div className='list'>
          <h4>{Title[1]}</h4>
          <p>9월 27일 발생</p>
        </div>
      )
    })
  }
```



* 같은 게시글 내용이 아닌, 각각 다른 게시글이 보이도록 하기 

```react

  {
    Title.map(function (a) {
      return (
        <div className='list'>
          <h4>{a}</h4>
          <p>9월 27일 발생</p>
        </div>
      )
    })
  }
```

> `function(a)` 안에 있던 `a` 는 array 안에 있는 데이터 



* 유용한 파라미터 2개 사용 가능 하다. (응용)

```react
  {
    Title.map(function (a, i) {
      return (
        <div className='list'>
          <h4>{Title[i]}</h4>
          <p>9월 27일 발생</p>
        </div>
      )
    })
  }
```

> 반복문이 돌 때 마다 0부터 1씩 증가하는 정수 ==> `i`



* `좋아요` 갯수 개별로 기록하기 

```react
<h4> 
  { 글제목[i] } 
   <span onClick={()=>{ 
      let copy = [...따봉];
      copy[i] = copy[i] + 1;
      따봉변경(copy)  
   }}>👍</span> {따봉[i]} 
</h4
```

