import { useCallback, useState, useEffect, useRef } from 'react'

function App() {

  //useState Hook:
  const [length , setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  //useRef Hook:
  const passwordRef = useRef(null)


  //useCallback Hook:
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()~`{}[]"

    for(let i =1; i<=length ;i++){          ///jitna array ka length utne digits k password generate krwane k liye for loop use kiya gya hai
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
      setPassword(pass)
    }

  }, [length, numberAllowed, charAllowed, setPassword])     //password ke jgh setPassword jyda optimization k liye use kiye hai

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();                      //isse pta chlega ki select hone se blue bracket aa jyega ki select hua ...iske bina bhi copy hoga hi ..bss optimization k liye use hua hai
    passwordRef.current?.setSelectionRange(0, 999);     //yeh range set krne ke liye kaha se kaha tk password select hona chahiye 
    window.navigator.clipboard.writeText(password)      //yeh windows.navigator se clipboard mein password copy kr rha hai
  }, [password])

  //useEffect Hook:
  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 text-orange-600 bg-gray-800 '>

      <h1 className=' text-4xl text-center text-white mb-2 my-5'>Password Generator</h1>

        <div className=' flex shadow rounded-lg overflow-hidden mb-3'>
          <input 
          type="text"
          value={password}
          className=' outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className=' outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'> Copy </button>
        </div>
        <div className='flex text-s gap-x-2'>
          <div className='flex items gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className =' cursor-pointer'
          onChange = {(e) => {setLength(e.target.value)}} 
          />
          <label>Length: {length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange = {() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange = {() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='charrInput'>Characters</label>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default App



/*

Project building steps:
1. Pehle sare useState hooks ko define kr liye hai....uske sath variable aur set function ke sath aur usestate mein initialising value add kr diye hai
2. passwordGenerator ek function bnaye jispe char se random value genrate krwa rhe hai phr usko pass mein add kr rha hai aur if condition use kiye hai ki jb jo allow hoga mtlb numbers ya characters ya both toh us hisb se str mein update kro.. aur setPassword jo bhi useState hook k function ko pass kr rha hai update krte ja rha hai
3. passwordGenerator ek callback funtion hai jispe parameter mein (function, [dependencies ka array]) hoga jispe depend kkrta hai function..aur good optimization k liye setPasword ko bhi refernce mein add kr diye hai ..agr setPassword() ko cll kr dnge toh infinite loop chal jyega 
4. useEffect hook ko isliye add kiye hai kyuki passgenerator ko direct call nahi kr skte aise React mein isliye usko declare krke parameter mein (function, [dependencies k array])..function ke andar call hone wle fucntion ko call kiye hai..jisse us function ko run krna hai
5. useRef hook se copy krne k liye phle varibale declare krke HTML & CSS part se onclick k help ek clipboard wle function ko call kiye aur us function mein kaise copy krna hai aur clipboard mein paste krna hai uske accrding codes likh diya gya hai..
6. baki return mein sara HTML aur CSS designing ka part while using TailwindCSS

*/


/*
KEY POINT:

1. useState Hook:
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

The first value, color, is our current state.
The second value, setColor, is the function that is used to update our state.
These names are variables that can be named anything you would like.
Lastly, we set the initial state to an empty string: useState("")



2.useEffect Hook:
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
This is not what we want. There are several ways to control when side effects run.
We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.



3. useCallback Hook:
The React useCallback Hook returns a memoized callback function.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.


4. useRef Hook:
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
To avoid this, we can use the useRef Hook.
useRef() only returns one item. It returns an Object called current.
When we initialize useRef we set the initial value: useRef(0).
It's like doing this: const count = {current: 0}. We can access the count by using count.current.
*/