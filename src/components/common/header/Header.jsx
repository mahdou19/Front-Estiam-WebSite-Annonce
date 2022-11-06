import React, { useContext } from 'react';
import "./Header.css"
import Navbar from './Navbar';
import { Search } from './Search';
import { useElementContext } from '../../../Context/Context';
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  const value = useContext(useElementContext);

  return (
    <header>
      <div className='menu'>
        <img src={menu} alt='' width='30' />
      </div>

      <div className='logo'>
        <h1>
          <Link to='/'> MonAnnonce</Link>
        </h1>
      </div>

        <ul>
          <li>
            <Link to='/'>Products</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <img src={close} alt='' width='30' className='menu'/>
          </li>
        </ul>
     
    </header>
  );
};
