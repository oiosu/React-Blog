## 2. Setting up React-PJT(Blog)

##### 1. 폴더 생성하기 

> `create react app` 라이브러리 도움을 받아 한번에 설치 가능

```bash
npx create-react-app blog
```

> * 허가되지 않은 스크립트 오류가 발생할 경우 
>
>   ```powershell
>   Set-ExecutionPolicy Unrestricted
>   ```

##### 2. 설치 완료 

![image](https://github.com/oiosu/React-PJT/assets/99783474/1c6a40c9-848e-4cd3-bc20-43912251893a)


##### 3. 미리 보기 띄우기 

```bash
npm start
```

> 명령어가 다를 경우 `package.json` 파일에서 "start" 부분 변경하기 
>
> ![image](https://github.com/oiosu/React-PJT/assets/99783474/4c7e3d4e-4f27-4253-a048-34bb81f3b683)

>
> ```javascript
>   },
>   "scripts": {
>     "start": "npm start",
>     "build": "react-scripts build",
>     "test": "react-scripts test",
>     "eject": "react-scripts eject"
>   },
> ```

---

##### 🔴 처음 보는 오류 

> react 랜더 시 발생하는 오류 

![image](https://github.com/oiosu/React-PJT/assets/99783474/0579d117-3737-49a7-b03e-40c7465ea0d0)


![image](https://github.com/oiosu/React-PJT/assets/99783474/94905594-d642-4524-a2d8-896ff66685f0)


> [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app 

##### ✔ package.json 파일에서 [ctrl+s] 를 눌러 저장한다. 

> ======> 내가 해결한 방법

* 참고한 블로그  : https://dkfma6033.tistory.com/131

---



##### 4. Compiled successfully!

![image](https://github.com/oiosu/React-PJT/assets/99783474/e31a7e1f-b4d5-4f63-aa6f-d14d61d98a10)


![image](https://github.com/oiosu/React-PJT/assets/99783474/332f5afd-b06a-4590-9ed5-9f176c39414e)




##### 5. 프로젝트 파일 구조 설명 

* node_modules 폴더 : 라이브러리 코드 보관함 

* public : static 파일 모아놓는 곳 
* src : 코드 작성하는 곳 
* package.json : 프로젝트 정보 



🤔 JS 코드임에도 불구하고 HTML 코드를 작성해도 되는 이유

> ![image](https://github.com/oiosu/React-PJT/assets/99783474/9b21e302-f868-401b-bc91-0b7469031153)
