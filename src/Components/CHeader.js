import React from 'react'
import Testing from './Testing'

class CHeader extends React.Component{

    state = {//video 18
        users:[
            {id: 1, name: "Rehan", Class: 'A'},
            {id: 2, name: "Midhat", Class: 'B'}
        ]
    }

    render(){
        //return <h1>Hello {this.props.name}</h1>
        //using this is class to access props
        const users = this.state.users.map(function(user){
            return(
                /*<h1 key={user.id}>{user.id}-{user.name}</h1>*/
                <Testing key={user.id} value={user.id}></Testing> //key must be unique in whole page
                //key will not able to pass in Testing Component
            )
        })
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                {users}
            </div>
        )
    }
}

export default CHeader