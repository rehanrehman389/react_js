import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Ajay"
      }
      console.log("LifeCycleB : constructor")
    }


    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB : getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB : componentDidMount")
    }

  render() {
    console.log("LifeCycleB : render")
    return (
      <div>LifeCycleB</div>
    )
  }
}

//contructor shocrtcut rconst
export default LifeCycleB