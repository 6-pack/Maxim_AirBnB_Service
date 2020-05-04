import React from 'react';

const mainCarArrows = ({direction, clickFunction, glyph}) (
  <div
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}>
    { glyph }
  </div>
);

export default mainCarArrows