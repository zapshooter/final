import React from 'react'
import { useNavigate } from 'react-router-dom'
import Searchcardathome from './Searchcardathome'

const Admincrud = () => {
    const navigate= useNavigate()
  return (
    <div>
    <div className='Big-Navbar'>
      <Searchcardathome/>
      <div className='Second-card'>
          <button className='addbuttons' onClick={()=> navigate('/equipmentdetailsentry')}>Add Equipment details</button>
          <button className='addbuttons' onClick={()=> navigate('/driverdetailsentry')}>Add Driver Details</button>
          <button className='addbuttons' onClick={()=> navigate('/accidententry')}>Add Accident Details</button>
      </div>
    </div>
    </div>
  )
}

export default Admincrud