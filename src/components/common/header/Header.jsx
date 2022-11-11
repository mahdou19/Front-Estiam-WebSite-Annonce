import React, { useContext } from 'react';
import "./Header.css"
import { useElementContext } from '../../../Context/Context';
import menu from '../../assets/images/menu.svg';
import logo from '../../assets/images/logo.png';
import close from '../../assets/images/close.svg';
import { Link } from 'react-router-dom';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Button from '@mui/joy/Button';

export const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const firstLogin = localStorage.getItem('FirstLogin')

  const state = useContext(useElementContext)
  const user = state.UserApi.isLogged


  console.log("state", user);



  const logoutUser = async () =>{
    localStorage.removeItem('FirstLogin')
    window.location.href = "/";
}

  return (
    <header>
      <div className='menu'>
        <img src={menu} alt='' width='30' />
      </div>

      <div className='logo'>
        <img src={logo} alt='Logo'/>
      </div>

        <ul>
          <li>
            <Link to='/'>Products</Link>
          </li>
          {
            firstLogin ?  (
            <>
            <li>
            
      <Button
        id="basic-demo-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
      >
       {user[0].firstname}
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
      >
        <MenuItem onClick={handleClose}><button onClick="">Mon Profile</button></MenuItem>
        <MenuItem onClick={handleClose}><button onClick={logoutUser}>Deconnecté</button></MenuItem>
      </Menu>
   
            {/* <Avatar alt="Remy Sharp" src={user[0].profile_picture} /> */}
            {/* <Link to='/disconnect'>Deconnecté</Link> */}
            {/* <button onClick={logoutUser}>Deconnecté</button> */}
          </li>
          </> )
           : (
              <li>
              <Link to='/login'>Login</Link>
            </li>          
          )
          }
         
          <li>
            <img src={close} alt='' width='30' className='menu'/>
          </li>
        </ul>
     
    </header>
  );
};
