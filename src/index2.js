import React from "react"
import ReactDom from "react-dom"


function App() {
    return (<div>
        <h2>On Page2 of APP</h2>
    </div>)
}



ReactDom.render(<App />, document.getElementById('test'))
// document.getElementById('test').innerHTML = "<h1>on page 2 via inner html</h2>";