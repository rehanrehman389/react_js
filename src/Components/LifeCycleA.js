import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Ajay"
      }
      console.log("LifeCycle : constructor")
    }

    //state is required to call the below method
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle : getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycle : componentDidMount")
    }

  render() {
    console.log("LifeCycle : render")
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>

    )
  }
}

//contructor shocrtcut rconst
export default LifeCycleA