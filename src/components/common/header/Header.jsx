import React from 'react'
import Navbar from './Navbar'
import { Search } from './Search'
import "./Header.css"


export const Header = () => {
  return (
    <>
        <Search/>
        <Navbar/>
    </>
  )
}
