import React, { Component } from 'react'

export class CFunctionClick extends Component {

    //passing props to function and super () to acess values so we can use that using state object
    constructor(props){
        super(props)
        //this.changeEvent = this.changeEvent.bind(this) //required in normal function (binding)
        //access values using state with this keyword
        this.state = {
            course: 'MCA',
            roll: this.props.roll //accessing props by passing in contructor
        }
    }

    changeEvent = () => { //arraow function

        this.setState({
            course: 'BCA'  //state are mutable (we can change the value) while props are immutable
        })

        //console.log('event from function component', this.state.course)
        console.log('event from function component', this.props.roll)
    }
    //above this keyword will be able to use in arrow function but we can't use in normal function. this will give undefined
    //using contructor we can use this keyword in normal function

//use this to access function in class
  render() {
    const num = this.props.numbers //accessing using props
    const newnum = num.map(function(num){
        return <li key={num}>{num}</li> //pass key as num array
    })
    return (
      <div>
        <button onClick={this.changeEvent}>Hit me</button>
        {/* {this.state.course} */}
        {this.props.roll}
        <ul>{newnum}</ul>
      </div>
      //we can also used fragment if we dont want div in class component
    )
  }
}
//rce command shortcut
export default CFunctionClick