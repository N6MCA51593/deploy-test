import { useState } from 'react';

const useZoomAndPan = ({ width, height }) => {
  const [panVLvl, setPanVLvl] = useState(0);
  const [panHLvl, setPanHLvl] = useState(0);
  const [zoomLvl, setZoom] = useState(1.1);

  const zoomStep = 2;
  const panStep = 50;

  const panV = (steps = 1) => {
    setPanVLvl(panVLvl + panStep * steps * zoomLvl);
  };

  const panH = (steps = 1) => {
    setPanHLvl(panHLvl + panStep * steps * zoomLvl);
  };

  const zoomIn = () => {
    setZoom(zoomLvl / zoomStep);
    setPanHLvl(panHLvl + (width * zoomLvl) / 4);
    setPanVLvl(panVLvl + (height * zoomLvl) / 4);
  };

  const zoomOut = () => {
    setZoom(zoomLvl * zoomStep);
    setPanHLvl(panHLvl - (width * zoomLvl) / 2);
    setPanVLvl(panVLvl - (height * zoomLvl) / 2);
  };

  return { panVLvl, panHLvl, panV, panH, zoomLvl, zoomIn, zoomOut };
};

export default useZoomAndPan;