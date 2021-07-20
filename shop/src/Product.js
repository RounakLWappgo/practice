import React, { Component } from 'react'
import { Redirect } from 'react-router';
export class Product extends Component {
constructor(props) {
    super(props)

    this.state = {
     title:this.props.match.params.id,
        desc : this.props.location.state.arr,
       price : this.props.location.state.prc,
       isClicked:false,
       isSubmitted:false,
       isvalid:false,
       emailvalid:true,
       phnvalid:true,
       namevalid:true,
       addressvalid:true,
       name: '',
       email: '',
       mob:'',
       txt:''
         
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e){

    console.log(e.target.value);
 
}

 handleSubmit(event){
  var nameval = isNaN(this.state.name) ; 
  console.log(nameval);
  console.log(this.state.name);
    event.preventDefault();
    var phnreg = /^[6-9]\d{9}$/;
    var emailreg =  /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
if(!(this.state.email.match(emailreg)) ){
  this.setState({
 
    emailvalid:false
});
console.log(!(this.state.email.match(emailreg)) );
console.log("hello");
} if (!this.state.mob.match(phnreg) ){
    this.setState({
      phnvalid:false
    });
    console.log(this.state.phnvalid);
} if(!(this.state.name.length<=20) ){
      this.setState({
        namevalid:false
      });
      console.log(this.state.namevalid);
}
 if(!this.state.txt.length<=30 ){
  this.setState({
    addressvalid:false
  });
  console.log(this.state.addressvalid);
}
if(this.state.phnvalid===true && this.state.emailvalid===true && this.state.namevalid === true && this.state.addressvalid === true){
  this.setState({
    isSubmitted:true
  });
  console.log(this.state.isSubmitted);
}
else {
 alert("invalid form");
 console.log("else");
}

 }
    render() {
      
        return (
            <div>
               <h1> {this.state.title}</h1>
             <p>{this.state.desc}</p>
             <p>{this.state.price}</p>
             <button onClick={() => this.setState({isClicked: true})}>BUY NOW</button>
             <br/>
              <br/>
             {this.state.isClicked ? 
             <div> 
                <form >
     
              <label>Full Name</label> <br/>
              <input type="text" value={this.state.name} maxLength="20" onChange={(e) => this.setState({name:e.target.value}) }/>
              <br/>
              <br/>
     
              <label>email</label> <br/>
              <input type="email" value={this.state.email} maxLength="20" onChange={(e) => this.setState({email:e.target.value}) }/>
              <br/>
              <br/>
              <label>Mobile no.</label> <br/>
              <input type="tel" value={this.state.mob} maxLength="10" onChange={(e) => this.setState({mob:e.target.value}) }/>
              <br/>
              <br/>
              <label>Address</label> <br/>
              <textarea value={this.state.txt} maxLength="30" onChange={(e) => this.setState({txt:e.target.value}) }></textarea>
              <br/>
              <br/>
            
          
          <button onClick={this.handleSubmit}>submit</button>
           </form>
           </div>: null
           } 
           {this.state.isSubmitted?  <Redirect
  to={{
    pathname: "/checkout",
    
    state: { name:this.state.name , email:this.state.email, mob:this.state.mob,address:this.state.txt, title:this.state.title, desc:this.state.desc, price:this.state.price }
  }} 
/>:
           null}
       
            </div>
        )
    }
}
export default Product
