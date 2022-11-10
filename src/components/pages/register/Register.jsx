import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Register = () => {
  const onChangeInput = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/registration');

      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.msg);
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
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='lastname'
          required
          placeholder='Nom'
          onChange={onChangeInput}
        />

        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          onChange={onChangeInput}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Mot de passe'
          onChange={onChangeInput}
        />
        <input
          type='number'
          name='phone'
          required
          placeholder='phone(Ex:0700000000'
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='address'
          required
          placeholder='Adresse'
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='zip_code'
          required
          placeholder='Code Postal'
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='city'
          required
          placeholder='Ville'
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='country'
          required
          placeholder='Pays'
          onChange={onChangeInput}
        />
        <input type='file' name='identifical_file' onChange={onChangeInput} />

        <div>
          <button type='submit'>S'inscrire</button>
          <Link to='login'>Se Connecter</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
