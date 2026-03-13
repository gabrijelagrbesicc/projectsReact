import './style.css'
import Products from './Components/Products'
import { useState } from 'react';

function onClickButton()
{
  console.log("Works");
}

function App()
{
  let [name, setName] = useState("Hello");
  let [tax, setTax] = useState(0);

  return (
    <>
      <Products tax={tax} />

      <button onClick={onClickButton}>{name}</button>

      <input type="text" onInput={ (e) => setName(e.target.value) } />

      <h1>Hello my name is {name}</h1>

      <input type="text" placeholder='unesi taxu' onInput={ (e) => setTax(e.target.value)}/>      
    </>
  );
}

export default App;