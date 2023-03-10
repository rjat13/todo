// 1) import React and ReactDOM library.
import React from "react";
import ReactDOM from "react-dom/client";

import Demo, {MyFun} from "./Demo";
import 'bulma/css/bulma.min.css'
import Card from "./component/Card";

// 2) Get refference to the div with root id.
const rootEle = document.getElementById('root');

// 3) Tell react to take controll of that element.
const root = ReactDOM.createRoot(rootEle)

// 4) create component
const App = () => {
    let msg = "By there!";
    if(Math.round(Math.random()*10) > 5){
        // console.log('if load');
        msg = "Hello there!";
    }
    return (<div className="container">
                <section className="section">
                    <h3>{msg}</h3>
                    <input type='text' placeholder='Hello' />
                    <hr />
                    <Demo />
                    <MyFun />
                    <Card />
                </section>
            </div>)
}

// 5) show the component on the screen.

root.render(<App />)