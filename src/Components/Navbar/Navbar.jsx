import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa"
import SearchBar from './Components/SearchBar'

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      className="sticky bg-black top-0 justify-between z-[5]"
    >
      <Link
        to="/"
        className='flex items-center'
      >
        <div className='flex flex-row items-center gap-2 text-red'>
          <FaYoutube className='text-[35px]'/>
          <h1 className='font-poppins text-[20px] capitalize text-white'>youtube <sup>clone</sup></h1>
        </div>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar