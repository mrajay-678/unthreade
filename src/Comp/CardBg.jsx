import React from 'react';
import 'animate.css';


const CardBg = (props) => {
  return (
    <>
      <div className='card-bg-outer w-100 animate__animated animate__zoomIn animate__delay-1s' style={{
        padding: `${props.pad}px`
      }}>
        {props.children}
      </div>
    </>
  );
};

export default CardBg;