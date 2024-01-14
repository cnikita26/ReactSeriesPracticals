import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  // we want increase counter value by 4 its on add value button one click value updated by 4 like if this is 10 then click btn we gives 14

  // const addValue =() => {
  //   setCounter(counter+1)
  //   setCounter(counter+1)         // This is wrong method cause of useState ,usState update batch value in UI 
  //   setCounter(counter+1)         // this all are the sames steps so usetate update only one time & op is 16 only 
  //   setCounter(counter+1)    
  // }

  // ##############THEN WE FOLLOW BELOW STEP METHOD(2)#################
   //METHOD 1
  // const addValue=()=>{
  //   setCounter((counter)=>{     //setCounter is self call back function bydeafult
  //     return         // But we know classic javascript thats why we dont need scope for one line code thats why we writw second and final method
  //     counter+1            
  //   })
  // }


  //Method 2

  const addValue=()=>{
    setCounter(prevCounter => prevCounter+1)    // prevCounter just a word to understand this concept otherwise we used counter also.
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

   
  const removeValue =() => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>ADD OR REMOVE</h1>
      <button
      onClick={addValue}>Add Value : {counter}</button>
      <button
      onClick={removeValue}
      >Remove Value : {counter}</button>
    </>
  )
}

export default App
