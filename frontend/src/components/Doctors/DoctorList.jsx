import React from 'react';
import {doctors} from "../../assets/data/doctor"
import DoctorCrad from './DoctorCrad';

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] 
    lg:mt-[55px]'>
        {
            doctors.map(doctor =>
            (<DoctorCrad key={doctor.id} doctor={doctor}/>)
            )
        }
    </div>
  )
}

export default DoctorList