# React-Blog
> 🖐 Hello React 
### Chapter 1. Why use React
* Advantage(1) : Single Page Application
* Advantage(2) : Convenient reuse of HTML
* Advantage(3) : App development possible

* Good things to know : HTML, CSS, JavaScript Variables, functions, if, for, array, object

---

### Chapter 2. Settings

##### (1) 프로젝트 작업할 폴더 생성하기

```bash
npx create-react-app pjt-name
``` 
```bash
npm create vite@latest
```


##### (2) 프로젝트 기본 파일 

> * `node_modules` : 라이브러리 코드 보관함
>
> * `public` : static 파일 모아놓는 곳
>
> * `src` : 코드 작성하는 곳
>
> * `app.js` : 메인 코드 작성하는 곳
>
> * `package.json` : 프로젝트 정보 

> Q. app.js 파일에 작성한 내용이 보이는 이유
>
> ![image](https://github.com/oiosu/React-Blog/assets/99783474/dc49eecc-ce00-4a87-8ab6-36d312a8dbec)
> 
> A. app.js 파일은 애플리케이션의 진입점(entry point)이자 최상위 컴포넌트이다.
>
> 이파일은 주로 애플리케이션의 구조를 정의하고 다른 컴포넌트들을 조합하여 전체 애플리케이션을 생성한다.

##### (3) 리액트 실행하기 ( localhost:3000 )

```bash
npm start
```

---

### Chapter 3. 레이아웃 만들 때 쓰는 JSX 문법 3개

##### (1) html에 class 넣을때는 `className`

* JSX는 일종의 자바스크립트라서 자바스크립트에서 사용하는 예약어는 class라는 키워드를 사용하면 안된다

##### (2) 변수를 html에 넣을때는 {중괄호}

* 변수 : 변수는 길고 복잡한 자료를 잠깐 한 단어에 저장해서 사용할 수 있는 문법이다.

```javascript
function App(){

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>{ post }</div>
      </div>
    </div>
  )
}
```
> 중괄호 안에 데이터 바인딩하고 싶은 변수명만 담으면 된다.
>
> 변수에 있던 것을 html에 넣는 작업을 = `데이터 바인딩` 이라고 한다.


