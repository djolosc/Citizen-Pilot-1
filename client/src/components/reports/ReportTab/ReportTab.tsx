import React, {useState, SetStateAction} from 'react';
import './ReportTab.css';
import {report} from '../../../types';
type Props = {
  report: report;
  setClicked: React.Dispatch<SetStateAction<boolean>>
  setDescriptionContainerData: React.Dispatch<SetStateAction<report>>
  // onClick () : void;
}
const ReportTab: React.FC<Props> = ({report, setClicked, setDescriptionContainerData}) =>
{
  
  const {Fname, Lname, category, urgency, email} = report;
  return (
    <div className='report-Container'>
      <div className='headline-Container'>
        <h2 className='report-description-text'>{category.charAt(0).toUpperCase() + category.slice(1)} problem</h2>
        <div className = {urgency ? 'urgency-red' : 'urgency-blue'}></div>
      </div>
     <div className='contact-Container'> 
        <div className='info' >
          <p>From {Lname} {Fname}</p> 
        </div >
        <div  className='email' >
          <p>{email}</p>   
        </div>
               
    </div>
      <button className='info-button'  onClick={()=> {
            setClicked(true);
            setDescriptionContainerData(report)
          }}>Info</button>
    </div>
  )
}

export default ReportTab;