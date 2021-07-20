import React, {useState} from 'react'


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');


    return (
        <div>
            <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Passwod" onChange={(e) => setPass(e.target.value)}/>
            <button>Register</button>

        </div>
    )
}

export default Register
