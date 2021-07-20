import React, { Component } from 'react'
import { Redirect } from 'react-router'




export class Checkout extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        name:this.props.location.state.name,
        title:this.props.location.state.title,
        price:this.props.location.state.price,
        desc:this.props.location.state.desc,
        mob:this.props.location.state.mob,
        email:this.props.location.state.email,
        address:this.props.location.state.address,
        back:false,
        readytopay:false
        
        }
        
    }
    render() {
     
  
      
        return (<>
            <div>
                <h1>Product details:</h1>
                <h2>{this.state.title}</h2>
                <p>{this.state.desc}</p>
                <h4>{this.state.price}</h4>
            </div>
            <hr/>
            <div>
                <h1>Your Details:</h1>
                <h3>{this.state.name}</h3>
                <h3>{this.state.mob}</h3>
                <h3>{this.state.email}</h3>
                <h3>{this.state.address}</h3>

                <button onClick={() => this.setState({readytopay:true})}>Proceed to pay?</button>
                <button onClick={() => this.setState({back:true})}>Back</button>
            </div> 
         {this.state.readytopay? 
                <div>
                    <button>{`pay ${this.state.price}`}</button>
                </div> :
                null
        }

        {this.state.back? <Redirect to="/" />:null}
            </>
        )
    }
}

export default Checkout
