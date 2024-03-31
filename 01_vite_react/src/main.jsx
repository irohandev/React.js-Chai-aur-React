import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>    //yaha bhi likh skte hai react mein functiions ko!
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',      //yeh run nahi krega kyuki yeh mere custom react k part hai mere accrding!
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (  
  <a href= "https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',                                                    //type; bss yeh react ke accrding aise bnta hai; lkin yaha pe type likhte nhi
  {href: 'https://google.com', target: '_blank'},         //yeh hua objects with its properties ispe bhi direct bs {} parentheses se likhte
  'Click me to visit google'                              //yeh hua children jo ki third part hai
)


ReactDOM.createRoot(document.getElementById('root')).render(

    //reactElement      //direct object ko aise likhnge toh aise yaha pe execute ho jana hai 
    <App/>
)
