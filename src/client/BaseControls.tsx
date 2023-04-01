import { useQuery } from '@tanstack/react-query';
import Arrow from "./Arrow";
import './BaseControls.css';
import './Controls.css';

function BaseControls() {
  return (
    <div className="baseControls">
      <div className="controls">
        <Arrow direction="left" onClick={() => {}} />
        <Arrow direction="right" onClick={() => {}} />
      </div>
    </div>
  );
}

export default BaseControls;
