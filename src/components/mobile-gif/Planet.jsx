// import React from 'react';
import {gifmoon} from '../../assets';

const MoonPlanet = () => {
  return (
    <div>
      <video src={gifmoon} loop autoPlay muted playsInline />
    </div>
  );
};

export default MoonPlanet;
