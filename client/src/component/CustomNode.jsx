import React from 'react';

const CustomNode = ({ data }) => {
  return (
    <div
      style={{
        width: '36px',
        height: '36px',
        fontSize:'16px',
        backgroundColor: data.backgroundColor || 'lightblue',
        border: '1px solid #333',
        borderRadius: '100%',
        padding:"6px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {data.label}
    </div>
  );
};

export default CustomNode;
