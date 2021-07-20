import React, { Component } from 'react'
import axios from 'axios';

export class HeaderTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             postId:'',
        }
    }

    componentDidMount() {
       
        axios.post('https://enh8nc1s6lgvft2.m.pipedream.net',  {  mock_data: "true",
        ip_address: "192.192.611.189",
        email: "Rounak@wappgo.com",
        user_agent: "Timepass",
        url: "http://ex.com/" }
    , {headers: { 
            'Content-Type': 'application/json',
            'My-Custom-Header': 'wappgo'
        }})
            
            .then(data => this.setState({ postId: data.id }))
           
    }
    render() {
        return (
            <div>
                <h1>{this.state.postId}</h1>
            </div>
        )
    }
}

export default HeaderTest
