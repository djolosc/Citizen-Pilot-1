import React, {useState, SetStateAction} from 'react';
import './proposalTab.css';
import {proposal} from './../../../types'
type props = {
  proposal: proposal;
}

const ProposalTab: React.FC<props> = ({proposal}) => {
  const {title, description, location, votes, image, approved, userId} = proposal;

return (
  <div className='container'>
    <div>{title}</div>
    <div>{description}</div>
    <div>{location}</div>
    <div>{image}</div>
    <div>{votes}</div>
  </div>
  
)
}

export default ProposalTab;