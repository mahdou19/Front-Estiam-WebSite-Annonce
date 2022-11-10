import React, { useState }  from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

const Register = () => {

  const formData = new FormData()
    const [user, setUser] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname:'',
        phone: '',
        address: '',
        zip_code: '',
        city: '',
        country:'',
        identifical_file: {}


      });
      const [selectedFile, setSelectedFile] = useState(null);
    
    
      const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };
    
      const handleSubmit = async e => {
        e.preventDefault()
        try{
            await axios.post('/registration', {...user})
    
            localStorage.setItem('FirstLogin', true)
    
            window.location.href = "/"
    
        }catch(err){
            alert(err.response.data.msg)
        }
      }
      return (
        <div className='login-page'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='firstname'
              required
              placeholder='Prénom'
              value={user.firstname}
              onChange={onChangeInput}
            />
             <input
              type='text'
              name='lastname'
              required
              placeholder='Nom'
              value={user.lastname}
              onChange={onChangeInput}
            />

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
              placeholder='Mot de passe'
              value={user.password}
              onChange={onChangeInput}
            />
              <input
              type='number'
              name='phone'
              required
              placeholder='phone(Ex:0700000000'
              value={user.phone}
              onChange={onChangeInput}
            />
            <input
              type='text'
              name='address'
              required
              placeholder='Adresse'
              value={user.address}
              onChange={onChangeInput}
            />
            <input
              type='text'
              name='zip_code'
              required
              placeholder='Code Postal'
              value={user.zip_code}
              onChange={onChangeInput}
            />
            <input
              type='text'
              name='city'
              required
              placeholder='Ville'
              value={user.city}
              onChange={onChangeInput}
            />
             <input
              type='text'
              name='country'
              required
              placeholder='Pays'
              value={user.country}
              onChange={onChangeInput}
            />
              <input
          type="file"
          name='identifical_file'
          value={user.identifical_file}
          onChange={onChangeInput}
        />

            <div>
              <button type='submit'>S'inscrire</button>
              <Link to='login'>Se Connecter</Link>
            </div>
          </form>
        </div>
      );
}

export default Register