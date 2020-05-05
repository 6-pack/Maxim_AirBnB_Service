import React from 'react';

const MainCarArrows = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}
  >
    { glyph }
  </div>
);

export default MainCarArrows;
