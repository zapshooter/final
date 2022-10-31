import React from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate()

  return (
      <divone className='Nav'>
        <h4 className='Searchtext'>Search By:</h4>
        <Input name='Enter User Id'/>
        <Input name='Enter Truck Id'/>
        <Input name='Enter Employee ID'/>
        <button type='Search' className='search-button' onClick={()=> navigate('/subheading')}>Search</button>
        </divone>
  )
}

export default Navbar