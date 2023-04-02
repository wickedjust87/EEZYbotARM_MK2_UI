import { useQuery } from '@tanstack/react-query';
import Arrow from "./Arrow";
import { DirectionType } from './types';
import './ArrowControls.css';

const SERVER_BASE_URL = 'localhost:3000';

type LocationType = 
    'base'
  | 'shoulder'
  | 'elbow'
  | 'grabber';

type Props = {
  location: LocationType,
};

type Metadata = {
  direction: DirectionType,
  queryUrl: string,
}

const locationToArrowMetadataListMap = {
  base: [
    {
      direction: 'left',
      queryUrl: `${SERVER_BASE_URL}/base/decrement`,
    },
    {
      direction: 'right',
      queryUrl: `${SERVER_BASE_URL}/base/increment`,
    }
  ],
  elbow: [
    {
      direction: 'left',
      queryUrl: `${SERVER_BASE_URL}/elbow/decrement`,
    },
    {
      direction: 'right',
      queryUrl: `${SERVER_BASE_URL}/elbow/increment`,
    }
  ],
  grabber: [
    {
      direction: 'release',
      queryUrl: `${SERVER_BASE_URL}/grabber/decrement`,
    },
    {
      direction: 'grab',
      queryUrl: `${SERVER_BASE_URL}/grabber/increment`,
    }
  ],
  shoulder: [
    {
      direction: 'left',
      queryUrl: `${SERVER_BASE_URL}/shoulder/decrement`,
    },
    {
      direction: 'right',
      queryUrl: `${SERVER_BASE_URL}/shoulder/increment`,
    }
  ],
};

function ArrowControls({ location } : Props) {
  const metadataList = locationToArrowMetadataListMap[location] as Metadata[];
  return (
    <div className={location}>
      <div className="controls">
        {metadataList.map(({ direction, queryUrl }) => (
          <Arrow
            key={direction}
            direction={direction} 
            onClick={() => {
              console.log(queryUrl);
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ArrowControls;
