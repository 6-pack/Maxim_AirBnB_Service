import React from 'react';
import mainCarElement from './mainCarElement.jsx';
import mainCarArrows from './mainCarArrows.jsx';

class mainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentElementIndex: 0
    }
    this.previousElement = this.previousElement.bind(this);
    this.nextElement = this.nextElement.bind(this);
  }

  previousElement() {
    const lastIndex = this.props.data.length - 1;
    const {currentElementIndex} = this.state;
    const shouldResetIndex = currentElementIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentElementIndex - 1;

    this.setState({
      currentElementIndex: index
    })
  }

  nextElement() {
    const lastIndex = this.props.data.length - 1;
    const {currentElementIndex} = this.state;
    const shouldResetIndex = currentElementIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentElementIndex + 1;

    this.setState({
      currentElementIndex: index
    })
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