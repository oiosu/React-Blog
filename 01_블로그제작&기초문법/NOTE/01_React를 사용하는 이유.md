## 01_React를 사용하는 이유 

> (1)  Single Page Application을 만들 때 사용한다. 
>
> Single Page Application 자바스크립트 언어로도 가능하지만 코드가 길어지고 복잡해지는 단점이 있다. 그래서 React라는 라이브러리를 설치하여 사용한다. 
>
> * React와 비슷한 라이브러리 : Vue, Svelte, Preact, SolidJS
>
> (2) React 를 사용하면 HTML 재사용 편리 
>
> ```react
> function Card(){
>     return <div>카드 레이아웃</div>
> }
> ```
>
> (3) 같은 문법으로 앱 개발이 가능
>
> * React Native
>
>   ```react
>   import React from "react";
>   import { View, Text } from "react-native";
>   
>   const ViewBoxesWithColorAndText = () => {
>       return (
>       <View style={{
>                   flexDirection : "row",
>                   height: 100,
>               }}
>       >
>       <View style={{ backgroundColor : "blue", flex: 0.3}} />
>       <View style={{ backgroundColor : "blue", flex: 0.5}} />
>       <Text>Hello World!</Text>
>       );
>   };
>   export default ViewBoxesWithColorAndText;
>   ```



