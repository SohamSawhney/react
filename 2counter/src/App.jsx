import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 
let counter=5
const addValue=()=>{
  // console.log("Value added",Math.random());
  console.log(counter=counter+1);
}
  return (
    <>
 <h1>chai aur react</h1>
 <h2>counter value {counter}</h2>
 <button
 onClick={addValue}
 >Add value</button>
 <br></br>
 <button>Remove value</button>
    </>
  )
}

export default App
