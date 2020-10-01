import React from 'react';
import './square.css';

const Square = ({ value }) => {
      
      return (
        <button className="square">
          { value }
        </button>
      );
  };

export default Square;  