import './Arrow.css';
import ArrowIconReverse from './ArrowIconReverse';

function ArrowGrab() {
  return (
    <div>
      <button className="arrow">
        <div className="right">
          <div>
            <ArrowIconReverse />
          </div>
        </div>
        <div className="left">
          <div>
            <ArrowIconReverse />
          </div>
        </div>
      </button>
    </div>
  );
}

export default ArrowGrab;
