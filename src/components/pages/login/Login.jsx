import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import "./login.css"

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault()
    try{
        await axios.post('/login', {...user})
        .then((res) => {
        const token = res.data.token.token
        localStorage.setItem('FirstLogin', token)
        window.location.href = "/"

        })
    }catch(err){
        console.log(err);
    }
  }
  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Password'
          value={user.password}
          onChange={onChangeInput}
        />
        <div>
          <button type='submit'>Se Connecter</button>
          <Link to='registration'>S'inscrire</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
