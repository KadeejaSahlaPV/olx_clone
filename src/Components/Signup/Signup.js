import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext, useFirebase } from '../../store/FirebaseContext';



export default function Signup() {
  const [username,setUsername] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const firebase = useFirebase();
   

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username})
     
    })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='img'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='example'>Login</a>
      </div>
    </div>
  );
}