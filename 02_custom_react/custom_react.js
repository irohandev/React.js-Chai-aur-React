function customRender(reactElement, mainContainer){
    
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children                
    domElement.setAttribute('href', reactElement.props.href)            //aise set attribute karke agar kiye toh bhot issues aynge kyuki aise jyda tym lgega kyuki 2 ya 3 hai toh thik usse jyda raha toh har ek attribute ko set krna pdega 
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);
 }



const reactElement = {
    type :'a',
    props:{
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'Click here to visit google'

}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)