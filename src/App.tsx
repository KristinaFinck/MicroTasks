import React from 'react';
import './App.css';
import {Button} from "./button/Button";

function App() {


    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const StupidButtonFoo = () => {
        console.log('Im stupid button')
    }
    return (
        <div className={'App'}>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Im Ivan')}/>
            <Button name={'StupidButton'} callBack={StupidButtonFoo}/>

        </div>
    );
}

// import React from 'react';
// import './App.css';
//
//
// function App() {
// //  const myFirstSubscriber=() => {
// //      console.log('Hello I am Vasya');
// //  }
// // const mySecondSubscriber = () => {
// //      console.log('Hello I am Ivan');
// //     }
//    // const onClickHandler = (name: string) => {
//      //   console.log(name)
//     const foo1 = () => {
//         console.log(100200)
//         //Ничего не передавать, но в консоли должно показаться 100200
//     }
//     const foo2 =(num:number) => {
//        // передать цифру 100200
//        console.log(num)
//     }
//
//   return (
//     <div className="App">
//       {/*<button onClick={() => onClickHandler('Vasya')}>MyYouTubeChannel-1</button>*/}
//       {/*<button onClick ={() => onClickHandler('Ivan')}>MyYouTubeChannel-2</button>*/}
//       {/*<button onClick ={() => onClickHandler('some info')}>MyYouTubeChannel-3</button>*/}
//
//          <button onClick =  {foo1}>1</button>
//         <button onClick={() => foo2(100200)}>2</button>
//
//     </div>
//   );
// }
//
export default App;
