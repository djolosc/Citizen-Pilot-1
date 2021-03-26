import React from 'react';
import './ReportTab.css';

type Props = {
  category: string,
  urgency: boolean,
  Fname: string,
  Lname: string,
  // onClick () : void;
}
const ReportTab: React.FC<Props> = ({category, urgency, Fname, Lname}) =>
{
  return (
    <div className='report-Container'>
      <h2 className='report-description-text'>{category.charAt(0).toUpperCase() + category.slice(1)} problem</h2>
      <div className='name-and-urgency'>
        <h4>From {Lname} {Fname}</h4>
        <div className = {urgency ? 'urgency-red' : 'urgency-green'}></div>
      </div>
    </div>
  )
}

export default ReportTab;