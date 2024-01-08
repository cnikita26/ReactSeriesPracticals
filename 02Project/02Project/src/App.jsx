import { useState } from 'react'

import './App.css'



function App() {
    let [counter, setCounter] = useState(15)
//let counter =15
   
const addValue = () =>{
 //console.log("Add value",counter) ;

 if(counter<20){
  counter = counter + 1
 setCounter(counter)    
 //  Firstly call setCounter () and then add counter + 1  
 }else{
  alert(" value Can't Increase above 20")
 }
 

  
}
const removeValue = () =>{
 // console.log("Remove value",counter) ;

 if(counter>0){
  counter = counter - 1
  setCounter(counter)     
 //  Firstly call setCounter () and then minus counter + 1 
 }else{
  alert ( "Value Can't decrease below 0")
 }
  
   
 }



  return (
    <>
     <h1>Change Important Increase And Button </h1>
     <h2>Counter Value : {counter}</h2>
     <button 
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
    
     <button 
     onClick={removeValue}
     >Remove Value {counter}</button>
    </>
  )
}

export default App 
