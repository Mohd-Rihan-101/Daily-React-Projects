


import React, { useState } from 'react'
import './App.css';

function App() {

  const [input, setInput] = useState('');
   
  const handleClick = (value) =>{
    if(value === 'C'){
      setInput('')
    }else if (value === '='){
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput(error)
      }
    }else{
      setInput(input + value);
    }
  }


  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ]
  return (
    <div className='calculator'>
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly className='display' />
      <div className='buttons'>
        {buttons.map ((btn)=>(
          <button key={btn} onClick={()=>{handleClick(btn)}}>
            {btn}
          </button>
        ))}
      </div>

      
    </div>
  )
}

export default App
