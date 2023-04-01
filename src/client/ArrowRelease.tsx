import './Arrow.css';
import ArrowIcon from './ArrowIcon';

function ArrowRelease() {
  return (
    <div>
      <button className="arrow">
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
      </button>
    </div>
  );
}

export default ArrowRelease;
