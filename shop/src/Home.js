import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[{
                title:"Product1",description:"this is the last product available", price:"$120"
            },{
                title:"Product2",description:"this is the best product available", price:"$10"
            },{
                title:"Product3",description:"this is the best product available", price:"$130"
            },{
                title:"Product4",description:"this is the best product available", price:"$125"
            },{
                title:"Product5",description:"this is the best product available", price:"$190"
            }]
        }
    }
    
    render() {
        const items = this.state.data; 
        return (
            <div>
                 {items.map(item => {
                     return(
                      <div key={item.title}>
                      <Link to={{
    pathname: `data/${item.title}`,
    state: { arr:item.description , prc:item.price}
  }} ><h1>{item.title}</h1></Link>
                      <p>{item.description}</p>
                      <h4>{item.price}</h4>
                  </div>
                  )
                 })}
              
            </div>
        )
    }
}

export default Home
