import React from 'react';
import { FaCar } from 'react-icons/fa'; // Example using a car icon from React Icons

// Custom label component for the edge
export default  CustomEdgeLabel = ({ sourceNode }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaCar size={16} /> {/* Add your desired icon here */}
      <span>
        Vehicle {sourceNode?.vehicleId}
      </span>
    </div>
  );
};