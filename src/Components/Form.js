import React, { Component } from 'react'
import axios from 'axios'

export class Form extends Component {
    constructor(props){
        super(props) //super call is must when defining constructor
        this.state={
            userid:'',
            title:'',
            body:''
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value }) //one for all tag
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        //alert(`${this.state.username}  ${this.state.address}`)
    }
  render() {
    const {userid, title, body} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User ID</label>
                <input type='text' value={userid} name="userid" onChange={this.changeHandler}></input>
            </div>
            <div>
                <label>Title</label>
                <textarea type='text' value={title} name="title" onChange={this.changeHandler}></textarea>
            </div>
            <div>
                <label>Body</label>
                <textarea type='text' value={body} name="body" onChange={this.changeHandler}></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form