import React from 'react'
import './Style.css'

function Stylesheet(props) {
    //passing multiple class in css
    let className = props.isvalue ? 'demo' : 'demo1';
    return (
        <div>
            <h1 className={`${className} demo2`}>Hello Stylesheet</h1>
        </div>
    )
}

export default Stylesheet