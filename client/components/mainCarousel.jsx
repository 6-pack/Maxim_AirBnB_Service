import React from 'react';
import mainCarElement from './mainCarElement.jsx';
import mainCarArrows from './mainCarArrows.jsx';

class mainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentElementIndex: 0
    }
  }
  render() {
    <div className='mainCarousel'>

      <mainCarArrows
        direction={'left'}
        // clickFunction={/*PREVIOUS SLIDE*/}
        glyph="&#9664;"/>

      <mainCarElement url={imgUrl} />

      <mainCarArrows
        direction={'right'}
        // clickFunction={/*NEXT SLIDE*/}
        glyph="&#9654;" />

    </div>
  }
}

export default mainCarousel;