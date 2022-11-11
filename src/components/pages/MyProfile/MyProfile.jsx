import React, { useContext, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useElementContext } from '../../../Context/Context';

const MyProfile = () => {
  const firstLogin = localStorage.getItem('FirstLogin')
    
  const state = useContext(useElementContext)
  const user = state.UserApi.isLogged

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



  const handleDelete = async() => {
    try {
      await axios.delete(`/user/:2`, {
        headers: {Authorization: `Bearer ${firstLogin}`}
      });
        alert("Profile supprimer")
      window.location.href = '/registration';
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('firstname', firstName);
    formData.append('lastname', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('zip_code', zip_code);
    formData.append('city', city);
    formData.append('country', country);


    try {
      await axios.put(`/user/:${user[0].id}`, {
        headers: {Authorization: `Bearer ${firstLogin}`}
      },formData);
        alert("Profile Enregistrer")
      window.location.href = '/MyProfile';
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
          value={user[0].firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          name='lastname'
          required
          placeholder='Nom'
          value={user[0].lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          value={user[0].email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input
          type='password'
          name='password'
          required
          placeholder='Mot de passe'
          value={user[0].password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <input
          type='number'
          name='phone'
          required
          placeholder='phone(Ex:0700000000'
          value={user[0].phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type='text'
          name='address'
          required
          placeholder='Adresse'
          value={user[0].address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type='text'
          name='zip_code'
          required
          placeholder='Code Postal'
          value={user[0].zip_code}
          onChange={(e) => setZip_code(e.target.value)}
        />
        <input
          type='text'
          name='city'
          required
          placeholder='Ville'
          onChange={(e) => setCity(e.target.value)}
          value={user[0].city}
        />
        <input
          type='text'
          name='country'
          required
          placeholder='Pays'
          value={user[0].country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {/* <div id='profile'>
          <label>Selectionner votre photo de profile</label>
          <input
            type='file'
            id='input-file'
            name='identifical_file'
        
            onChange={onChangeInput}
          />
        </div> */}

        <div>
          <button type='submit'>Enregistrer</button>
        </div>
        <div>
          <button  onClick={handleDelete}>Supprimer</button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
