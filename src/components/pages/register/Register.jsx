import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zip_code, setZip_code] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [identifical_file, setIdentifical_file] = useState('');

  const onChangeInput = (e) => {
    setIdentifical_file(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('firstname', firstName);
    formData.append('lastname', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('zip_code', zip_code);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('identifical_file', identifical_file);

    try {
      await axios.post('/registration', formData);

      window.location.href = '/login';
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstname'
          required
          placeholder='Prénom'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          name='lastname'
          required
          placeholder='Nom'
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Mot de passe'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='number'
          name='phone'
          required
          placeholder='phone(Ex:0700000000'
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type='text'
          name='address'
          required
          placeholder='Adresse'
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type='text'
          name='zip_code'
          required
          placeholder='Code Postal'
          onChange={(e) => setZip_code(e.target.value)}
        />
        <input
          type='text'
          name='city'
          required
          placeholder='Ville'
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type='text'
          name='country'
          required
          placeholder='Pays'
          onChange={(e) => setCountry(e.target.value)}
        />
        <div id='profile'>
          <label>Selectionner votre photo de profile</label>
          <input
            type='file'
            id='input-file'
            name='identifical_file'
            onChange={onChangeInput}
          />
        </div>

        <div>
          <button type='submit'>S'inscrire</button>
          <Link to='login'>Se Connecter</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
