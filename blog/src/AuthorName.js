import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUser } from './actions'




export class AuthorName extends Component {

    componentDidMount(){
       
      this.props.fetchUser(this.props.id)
    }
    render() {
      const user = this.props.users.find(user => user.id === this.props.id);
     
        return (<>
            {!user? null:
            <h5>{user.name}</h5>}
            </>
        )
    }
}




const mapstate = state => {
    return { users: state.users}
}

export default connect(mapstate , { fetchUser})(AuthorName)
