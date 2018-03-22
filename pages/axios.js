import React from 'react'
import Layout from '../lib/Layout'
import Link from 'next/link'

import axios from "axios";
import { withRouter } from "next/router";


export const Loading = () => (
    <li>Loading...</li>
)

class Axios extends React.Component {
    constructor() {
        super();
    
        this.state = {
          posts: []
        };
      }

    componentDidMount() {
        const _this = this;
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts',
            responseType:'stream'
        })
        .then(function(response) {
            _this.setState({posts: response.data}, () => {
                console.log(_this.state.posts);
            })
        });
    }
  
    render () {
        const posts = this.state.posts;
        const post = posts.map((post, index) => {
            return (
                <li key={index}>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </li>
            )
        });
    
        return (
        <div>
            <Layout>
                <ul>
                    {this.state.posts.length === 0 ? <Loading/> : post}
                </ul>
            </Layout>
        </div>
        )
    }
  }
  
export default withRouter(Axios);