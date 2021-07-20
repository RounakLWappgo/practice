import React, {useState} from 'react'
import { Redirect } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [islogggedin, setisloggedin] = useState(false)
    function login(){
        if(email === "rounak@wappgo.in" && password === "abc@123"){
           setisloggedin(true);
           localStorage.setItem('status', 'succes');
            console.log("login success");
        }else alert("Incorrect credentials")}
        console.log(islogggedin);
    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
            <button onClick={() => login()}>Login</button>
            {islogggedin?
            <Redirect to={{pathname:"/Home", state:{name:'Rounak'} }}/>:null
          
            }
        </div>
    )
}

export default Login
