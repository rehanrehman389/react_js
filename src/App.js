import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Header from './Components/Header';
import { Header } from './Components/Header';
import CHeader from './Components/CHeader';
import Channel from './Components/Channel';
import FunctionClick from './Components/FunctionClick';
import CFunctionClick from './Components/CFunctionClick';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './Components/appstyle.css';
import Style from './Components/appstyle.module.css'; //Style is module

import Form from './Components/Form';
import Routing from './Components/Routing';

import LifeCycleA from './Components/LifeCycleA';

import PostList from './Components/PostList';

import HookCounter from './Components/HookCounter';
import HookObject from './Components/HookObject';

//Class Component
class App extends React.Component
{
  render(){
    //return support only one tag for more than one we have to use div tag
    const name = 'Midhat'
    const num = [1,4,5]
    return(
      <div>
        {/* <Header name={name}>
          <p>from app.js html tag</p>
        </Header>
        <Header name='Ayesha'>
          <a href=''>Test</a>
        </Header>
        <Header name='Rehan'/>
        <CHeader name='Class Name'/>
        <Channel />
        <FunctionClick />
        <CFunctionClick roll='22' numbers={num} /> */}
        {/* <h1 className={Style.success}>Green</h1>
        <h1 className='error'>Error</h1>
        <Stylesheet isvalue={false} />
        <Inline /> */}
        {/* <Form /> */}
        {/* <Routing /> */}
        {/* <LifeCycleA /> */}
        {/* <PostList /> */}
        <HookCounter />
        <HookObject />
      </div>
    );
  }
}
// const name = <span>Hell React</span>
// const test = () => {
//   alert('Hello Ajay')
// }
// const age = (a) => {
//   if(a > 25){
//     return <span>You are eligible</span>
//   } else{
//     return <span>You are not eligible</span>
//   }
// }

//Function Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello {name}</h1>
//       <button onClick={test}></button>
//       {age(19)}
//     </div>
//   );
// }

export default App;
