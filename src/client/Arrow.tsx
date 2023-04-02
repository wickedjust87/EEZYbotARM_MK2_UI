import './Arrow.css';
import ArrowIcon from './ArrowIcon';
import { DirectionType } from './types';

type OnClickType = () => void;

type Props = {
  direction: DirectionType,
  onClick: OnClickType,
};

function Arrow({ direction, onClick } : Props) {
  return (
    <button className={`arrow ${direction}`} onClick={onClick}>
      <Contents direction={direction} />
    </button>
  );
}

type ContentsProps = {
  direction: DirectionType,
};

function Contents({ direction } : ContentsProps) {
  switch(direction) {
    case 'grab':
      return <ArrowGrabContents />;
    case 'release':
      return <ArrowReleaseContents />;
    case 'left':
    case 'right':
      return <ArrowContents />;
    default:
      throw new Error('Unexpected direction passed.');
  }
}

function ArrowContents() {
  return (
    <div>
      <ArrowIcon />
    </div>
  );
}

function ArrowGrabContents() {
  return (
    <>
      <div className="right">
        <div>
          <ArrowIcon direction='reverse' />
        </div>
      </div>
      <div className="left">
        <div>
          <ArrowIcon direction='reverse' />
        </div>
      </div>
    </>
  );
}

function ArrowReleaseContents() {
  return (
    <>
      <div className="left">
        <div>
          <ArrowIcon />
        </div>
      </div>
      <div className="right">
        <div>
          <ArrowIcon />
        </div>
      </div>
    </>
  );
}

export default Arrow;
