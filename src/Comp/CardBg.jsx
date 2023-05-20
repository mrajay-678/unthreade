import React from 'react';

const CardBg = (props) => {
  return (
    <>
      <div className='card-bg-outer' style={{
        padding: `${props.pad}px`
      }}>
        {props.children}
      </div>
    </>
  );
};

export default CardBg;