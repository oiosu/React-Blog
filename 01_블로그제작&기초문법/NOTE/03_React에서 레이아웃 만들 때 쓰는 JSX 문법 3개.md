## 3. JSX 문법 

```react
function App() {
  return (
    <div className="App">
      <div></div>
    </div>
  );
}
```

##### ◼ JSX : `.JS` 파일에서 쓰는 HTML 대용품 

> * JSX 사용하는 이유 
>
> : 원래 REACT 에서 DIV를 만드는 법은 `React.createElement('div', null, "Hello World")` 이다. 좀 더 쉽게 작성하도록 JSX 사용하기 

##### JSX 문법 (1) `className` 

> 🔻 `class` 넣을 땐 `className` 이라고 작성해야 한다. 
>
> ```react
> <div className="App">
>       <div className='black-nav'>
>         <h4>BLOG</h4>
>       </div>
> </div>
> ```

* 참고 ) CSS 파일을 사용하려면 상단에서 `import css 파일 경로` 로 작성해야 한다. 

##### JSX 문법 (2) 데이터 바인딩(=중괄호 사용)

> 🔻 변수 넣을 땐 `{중괄호}` 
>
> ex) 블로그 글 제목 
>
> ```react
> let post = '광화문 우동 맛집';
> ```
>
> =======> 변수에 있던 자료를 html 에 넣고 싶으면!?
>
> ```react
> document.querySeclector('h4').innerHTML = post;
> ```
>
> =======> 전체 코드 
>
> ```react
> function App() {
> 
>   let post = '광화문 우동 맛집';
>   document.querySeclector('h4').innerHTML = post;
> 
>   return (
>     <div className="App">
>       <div className='black-nav'>
>         <h4>BLOG</h4>
>         <h4>블로그 글 제목</h4>
>       </div>
>     </div>
>   );
> }
> ```
>
> =======> 중괄호 사용 
>
> ```react
> function App() {
>   let post = '광화문 우동 맛집';
>   return (
>     <div className="App">
>       <div className='black-nav'>
>         <h4>BLOG</h4>
>         <h4>{post}</h4>
>       </div>
>     </div>
>   );
> }
> ```
>
> ![image](https://github.com/oiosu/React-PJT/assets/99783474/d3cd0a50-8095-4c86-b252-debe10102f2e)


##### JSX 문법 (3)  style 넣을 땐 style={{ 스타일명 : '값' }}

주의사항 : font-size =====> fontSize

```react
<h4 style={ { color : 'red', fontSize : '16px' } }></h4>
```

