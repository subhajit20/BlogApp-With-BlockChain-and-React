import React from 'react';
import {Outlet} from 'react-router-dom';
import RegistrationNavbar from './RegistrationNavbar';

function RegistrationComponent() {
  
  return (
    <div>
      <div className='z-10'>
        <RegistrationNavbar/>
      </div>
        <Outlet/>
    </div>
  )
}

export default RegistrationComponent