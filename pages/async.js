import React from 'react'
import Layout from '../lib/Layout'
import Link from 'next/link'

import axios from "axios";
import { withRouter } from "next/router";

class Async extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // GET request for remote image
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts',
            responseType:'stream'
        })
        .then(function(response) {
            setTimeout(()=>{
                console.log(response.data);
                this.setState({posts: 'woi'}, () => {
                    console.log(this.state.posts);
                });
            },5000)
        });
    }
  
    render () {
        // const posts = this.state.posts;
        // const post = posts.map((post, index) => {
        //     return (
        //         <li key={index}>
        //             <div>{post.title}</div>
        //             <div>{post.body}</div>
        //         </li>
        //     )
        // });
    
        return (
        <div>
            <Layout>
                {/* <ul>
                    {this.state.posts.length === 0 ? '<li>Loading...</li>' : post}
                </ul> */}
            </Layout>
        </div>
        )
    }
  }
  
export default withRouter(Async);