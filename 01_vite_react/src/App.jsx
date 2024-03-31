import Test from "./Test"

/*
function App() {

  return (
    <>          
    <h1>Starting with ReactJS with Vite</h1>
    <Test/>     
    </>
  )
}*/

function App() {
  const name = "Rohan"

  return (
    <>
    <h1>Hello {name}!</h1>    
    </>
  )
}


export default App

// NOTE:
// line 5 - <> = isko fragment kehte hai !
// line 5 - idhar bass ek hi tag return kr skte hai isliye ek hi tag mein in sbko close kr diye hai..iske andar bhot se element ho skte hai
// line 7 - Test ko bhi idhr leke aa gaye hai
// line 19 - {name} = aise react mein variable use kr skte hai f string jaise python mein bs yaha final output k bdd yeh use krna hai