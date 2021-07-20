import React from 'react';
import axios from 'axios';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            postId: '',
            post:{"title": "mypost"},
            count: 10
        };
    }
    postdata = () => {
        axios.post('https://my-json-server.typicode.com/typicode/demo/posts', this.state.post)
        .then(response => this.setState({postId: response.data.id}))
    }
     getdata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => this.setState({ posts: response.data }));
    }
    render() {
        const data = this.getdata;
        const id = this.postdata;
        return (
            <>
            <div>
                <h5>Simple GET Request</h5>
           
                    <button onClick={data}>get data</button>
                    <table>
                       {this.state.posts.slice(0, this.state.count).map(item => {
                           return(
                            <tr>
                               <td>{item.id}</td>
                               <td>{item.title}</td>
                           </tr>
                           )
                           
                       })}
                    </table>{ this.state.posts.length>1?
                    this.state.count===100? 
                     <p>No more to load</p> : <button onClick={() => {this.setState({count:this.state.count+10})}}>loadmore...</button>: null}
                    <button onClick={id}>post data</button>
                    <h1>{this.state.postId}</h1>
                </div>
           </>
        );
    }
}

export { GetRequest };