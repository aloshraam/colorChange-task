import React from 'react';

function ColorButtons(props) {
  return (
    <div>
      <h2>Parent Data: {props.dataFromParent}</h2>
      <h3>Current Background Color: {props.currentColor}</h3>

      <button
        onClick={() => props.changeColor('red')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Red
      </button>
      <button
        onClick={() => props.changeColor('blue')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Blue
      </button>
      <button
        onClick={() => props.changeColor('yellow')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'yellow',
          border: 'none',
          borderRadius: '5px',
          color: 'black',
        }}
      >
        Yellow
      </button>
    </div>
  );
}

export default ColorButtons;