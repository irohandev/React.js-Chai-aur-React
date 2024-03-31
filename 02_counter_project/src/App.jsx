import { useState } from 'react'


function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);
    setCounter(counter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  }

  const substractValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>COUNTER PROJECT!</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value </button> 
      <br />
      <button
      onClick={substractValue}
      >substract value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App


//Notes:
//Hooks : Functions whose names start with use are called Hooks in React.Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

//Rules for Hooks:
// Only call Hooks at the top level
// Only call Hooks from React functions

// It’s not supported to call Hooks (functions starting with USE) in any other cases, for example:
//  Do not call Hooks inside conditions or loops.
//  Do not call Hooks after a conditional return statement.
//  Do not call Hooks in event handlers.
//  Do not call Hooks in class components.
//  Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
//  Do not call Hooks inside try/catch/finally blocks.
// If you break these rules, you might see this error