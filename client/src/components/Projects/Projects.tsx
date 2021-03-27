import React, { SetStateAction, useState } from 'react';
import Proposals from '../Proposals/Proposals';
import { proposal } from './../../types';
import './projects.css';

type props = {
  setApprovedProposals: React.Dispatch<SetStateAction<proposal[]>>;
  approvedProposals: proposal[];
};

const initalData = {
  title: '',
  description: '',
  location: '',
  image: '',
  completion: 0,
};

// const handleProposalClick = () => {
//   setFormValue({
//     title: Proposals.title
//   })
// };

const Projects: React.FC<props> = ({
  approvedProposals,
  setApprovedProposals,
}) => {
  const [formValue, setFormValue] = useState(initalData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    // CHECK THE TYPE OF EVENT!!!!
    e.preventDefault();
    setFormValue(initalData);
  };

  return (
    <div className="containerProjects">
      <div className="proposals-container">
        {approvedProposals ? (
          approvedProposals.map((proposal) => (
            <div
              className="proposal"
              onClick={() => {
                setFormValue({
                  title: proposal.title,
                  description: proposal.description,
                  location: proposal.location,
                  image: proposal.image,
                  completion: 0,
                });
              }}
            >
              <div>{proposal.title}</div>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>Title</div>
          <input
            name="title"
            value={formValue.title}
            type="text"
            onChange={handleChange}
          ></input>
          <div>Description</div>
          <input
            name="description"
            value={formValue.description}
            type="text"
            onChange={handleChange}
          ></input>
          <div>Location</div>
          <input
            name="location"
            value={formValue.location}
            type="text"
            onChange={handleChange}
          ></input>
          <div>Image</div>
          <input
            name="image"
            value={formValue.image}
            type="text"
            onChange={handleChange}
          ></input>
          <div>Completion</div>
          <input
            name="completion"
            value={formValue.completion}
            type="text"
            onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="projects-container"></div>
    </div>
  );
};

export default Projects;
