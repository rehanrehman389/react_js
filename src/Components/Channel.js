import React from 'react'

class Channel extends React.Component{

    constructor(){
        super()
        //using state in Class component
        this.state = {
            msg: 'Hello Channel Component'
        }
    }

    subscribe(){
        this.setState({
            msg: 'Hello Channel Componentfrom setState'
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={ () => { this.subscribe() }}>Subcscribe</button>
            </div>
        )
        //using this is class to access props
    }
}

export default Channel