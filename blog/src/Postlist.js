import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost} from './actions'
import AuthorName from './AuthorName'

export class Postlist extends Component {
    componentDidMount(){
        this.props.fetchPost()

    }
    render() {
        const data = this.props.posts;
        return (
            <div>
                <h2>PostList:</h2>
                {data? data.map((item) => {
                    return <div key={item.id}>
                        <li>{item.title}</li>
                        <AuthorName id={item.userId}/>
                    </div>
                }): <h1>No Posts Available</h1>}
            </div>
        )
    }
}

const mapstate = state => {
    return {posts: state.posts}
}

export default connect(mapstate , {fetchPost})(Postlist)
