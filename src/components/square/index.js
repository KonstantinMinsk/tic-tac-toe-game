import React from 'react';
import './square.css';

const Square = ({ value, onClick }) => {
  // Square no longer keeps track of the game’s state. This is Board to do.
  // const [value, setValue] = useState(''); 

      return (
        <button className="square" onClick={onClick}>
          { value }
        </button>
      );
  };

export default Square;  