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

![image-20230926140846417](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926140846417.png)

##### 3. 미리 보기 띄우기 

```bash
npm start
```

> 명령어가 다를 경우 `package.json` 파일에서 "start" 부분 변경하기 
>
> ![image-20230926142009064](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926142009064.png)
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

![image-20230926143231644](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926143231644.png)

![image-20230926143425647](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926143425647.png)

> [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app 

##### ✔ package.json 파일에서 [ctrl+s] 를 눌러 저장한다. 

> ======> 내가 해결한 방법

* 참고한 블로그  : https://dkfma6033.tistory.com/131

---



##### 4. Compiled successfully!

![image-20230926143801160](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926143801160.png)

![image-20230926143844995](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926143844995.png)



##### 5. 프로젝트 파일 구조 설명 

* node_modules 폴더 : 라이브러리 코드 보관함 

* public : static 파일 모아놓는 곳 
* src : 코드 작성하는 곳 
* package.json : 프로젝트 정보 



🤔 JS 코드임에도 불구하고 HTML 코드를 작성해도 되는 이유

> ![image-20230926144713065](C:\Users\bestsu\AppData\Roaming\Typora\typora-user-images\image-20230926144713065.png)