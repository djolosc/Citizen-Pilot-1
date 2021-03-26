import React from 'react';
import './DescriptionTab.css';
import {report} from '../../../types';

type Props = {
  descriptionContainerData: report;
}
const DescriptionTab: React.FC<Props> = ({descriptionContainerData}) =>
{
  return (
    <div className="description-container">
        <div className="raised-edge">{descriptionContainerData.description}
          <div className="edge-shadow"></div>
        </div>
      </div>
  )
}

export default DescriptionTab;