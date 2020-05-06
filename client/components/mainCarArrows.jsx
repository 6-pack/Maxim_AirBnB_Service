import React from 'react';

const MainCarArrows = ({ direction, clickFunction, glyph }) => (
  <div
    data-spec={`slide-arrow ${direction}`}
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}
  >
    { glyph }
  </div>
);

export default MainCarArrows;
