import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[],
        error:''
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({ posts: response.data})
            console.log(response)
        })
        .catch(error => {
            this.setState({ error: 'URL error'})
            console.log(error)
        })
    }
  render() {
    const {posts, error} = this.state //this is how we can use state variables
    return (
      <div>
        List Post Data
        {
            posts.length ?
            posts.map(post => <div key={post.id}> {post.body} </div>): null
        }
        {
            error ? <div>{ error }</div>: null
        }
      </div>
    )
  }
}

export default PostList