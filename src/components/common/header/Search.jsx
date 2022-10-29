import React from 'react'
import logo from "../../assets/images/logo.png"

export const Search = () => {
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='Logo' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span className='click_all_category'>Tous Cat..</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
          </div>
        </div>
      </section>
    </>
    
  )
}
