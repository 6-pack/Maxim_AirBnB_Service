import React from 'react';
import MainCarElement from './MainCarElement.jsx';
import MainCarArrows from './MainCarArrows.jsx';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElementIndex: 0,
    };
    this.previousElement = this.previousElement.bind(this);
    this.nextElement = this.nextElement.bind(this);
  }

  previousElement() {
    const lastIndex = this.props.data.length - 1;
    const { currentElementIndex } = this.state;
    const shouldResetIndex = currentElementIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentElementIndex - 1;

    this.setState({
      currentElementIndex: index,
    });
  }

  nextElement() {
    const lastIndex = this.props.data.length - 1;
    const { currentElementIndex } = this.state;
    const shouldResetIndex = currentElementIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentElementIndex + 1;

    this.setState({
      currentElementIndex: index,
    });
  }

  render() {
    return (
      <div className="mainCarousel">

        <MainCarArrows
          direction="left"
          clickFunction={this.previousElement}
          glyph="&#9664;"
        />

        <MainCarElement data={this.props.data} currentElement={this.state.currentElementIndex} />

        <MainCarArrows
          direction="right"
          clickFunction={this.nextElement}
          glyph="&#9654;"
        />

      </div>
    );
  }
}

export default MainCarousel;
