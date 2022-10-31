import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import './index.css';
import Subheading from './components/Subheading';
import Navbar from './components/Searchcardathome';
import axios from 'axios';
import { useState } from 'react';
import Home from './components/Admincrud';
import AccidentEntryForm from './components/AccidentEntryForm';
import DriverDetailsEntry from "./components/DriverDetailsEntry"
import EquipmentLookup from "./components/EquipmentDeatailsForm"
import Login from './components/Login';
import Loginprompt from './components/Loginprompt';
import EquipmentDetailsForm from './components/EquipmentDeatailsForm';
import Admincrud from './components/Admincrud';
import Signup from './Pages/Signup';
import Footer from './components/Footer/Footer';
import Heading from './components/Navbar/Navbar';

//const api= axios.create()


function App() {

  return (
    
    <div>
      <Heading/>
      {/* <Link to="/Login">Login</Link>
      <Link to="/Home">Home</Link> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='loginprompt' element={<Loginprompt/>} />
        <Route path='signup' element={<Signup/>} />  
        {/* <Route path='about' element={<Home/>} /> */}

        <Route path='adminaccess' element={<Admincrud/>}/>
        <Route path='subheading' element={<Subheading/>}  />
        <Route path='equipmentdetailsentry' element={<EquipmentDetailsForm/>} />
        <Route path='driverdetailsentry' element={<DriverDetailsEntry/>} />
        <Route path='accidententry' element={<AccidentEntryForm/>} />

      </Routes>
    </div>
  );
}

export default App;
