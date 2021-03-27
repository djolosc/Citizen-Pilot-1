import React from 'react';
import './proposals.css';
import ProposalTab from './ProposalTab/ProposalTab';

const MOCK_DATA = [{
  title: 'New Benches in the park',
  description: 'We should put more benches in the park as I think that is the best idea',
  location: 'City Park',
  image: 'image',
  votes: 30,
  approved: true,
  userId: 1,
}, {
  title: 'New Benches in the park',
  description: 'We should put less benches in the park as I think that is the best idea',
  location: 'City Park',
  image: 'image',
  votes: 0,
  approved: false,
  userId: 3,
},

]



const Proposals = () => {
  return (
    <div className='proposal-container'>
      {MOCK_DATA.map(proposal => (
        <ProposalTab proposal={proposal}/>
      ))}
    </div>
  );
};

export default Proposals;
