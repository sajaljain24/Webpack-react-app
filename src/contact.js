import React from "react"
import ReactDom from "react-dom"


function App() {
    return (<div>
        <h2>Contact Us</h2>
        <p>Publicis Sapient</p>
        <p>Gurgaon</p>

    </div>)
}



ReactDom.render(<App />, document.getElementById('root'))
// document.getElementById('test').innerHTML = "<h1>on page 2 via inner html</h2>";