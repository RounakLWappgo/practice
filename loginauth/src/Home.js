import React, { useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
 
function Home() {

let status = localStorage.getItem("status");
const [logout, setlogout] = useState(status);
const [login, setlogin] = useState(false);

    return (<div>
        {logout ===""?
         <button onClick={() => setlogin(true)}>LogIn</button> 
                :    <div>
                
                        {status}
               
                <button onClick={() => {localStorage.clear();
                    setlogout(" ");
                    setlogin(true)}}> logout</button>
                </div>


        }
                  {  login? <Redirect to="/"/>: null}
                
              
    
  
    
        </div>
    )
}

export default Home
