import React, {useState, useEffect} from 'react';
import ReportTab from './ReportTab/ReportTab';
import DescriptionTab from './DescriptionTab/DescriptionTab';
import {report} from '../../types'
import './reports.css'

const MOCKDATA = [
  {category: 'transport',
  description: 'There is a big hole in the road. Street number 5.',
  langtitude: 55.33,
  latitude: 44.5,
  urgency: true,
  image: 'img',
  Fname: 'Corona',
  Lname: 'Bench'},
  

  {category: 'environment',
  description: 'River is blue',
  langtitude: 55.33,
  latitude: 43.5,
  urgency: false,
  image: 'img',
  Fname: 'Haydn',
  Lname: 'Ozzie'},
];


const Reports = () => {
  const [descriptionContainerData, setDescriptionContainerData] = useState<report>({
    category: '',
  description: '',
  langtitude: 0,
  latitude: 0,
  urgency: false,
  image: '',
  Fname: '',
  Lname: '',
  });

  const tabColor = {
    backgroundColor: '#3d41d7',
  };

  return (
    <div className='reports-container'>
      <div>
        {MOCKDATA.map(report => (
          <div 
          style={tabColor}
          onClick={()=> {
            setDescriptionContainerData(report)
          }} >
            <ReportTab category={report.category} urgency={report.urgency} Fname={report.Fname} Lname={report.Lname}/>
          </div>))
        }
      </div>
      <DescriptionTab descriptionContainerData={descriptionContainerData}/>
    </div>
  );
};

export default Reports;
