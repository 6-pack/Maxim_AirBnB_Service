import React from 'react';
import styled from 'styled-components';

class ElementCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgData: this.props.images,
      translateX: 0
    }
  }

  render() {
    return (
      <img src={this.state.imgData[0]} alt='houses'></img>
    )
  }
}

export default ElementCarousel;