import React from 'react';
import styled from 'styled-components';

const MHYML_EC_E_Wrapper = styled.div`
  overflow: hidden !important;
  width: 333px;
  height: 222px;
  box-sizing: border-box;
  display: block;
`;

const MHYML_Transformer = styled.div`
  margin-bottom: 0px !important;
  padding: 0px !important;
  overflow: visible !important;
  white-space: nowrap !important;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s, transform 0.5s ease 0s !important;
  transform: translateX(${(props) => props.state}%);
`;

class ElementCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgData: this.props.images,
      translateX: 0,
      hovered: false
    }

    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      hovered: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hovered: false
    })
  }

  previousImage() {

  }

  nextImage() {

  }

  render() {
    return (
      <MHYML_EC_E_Wrapper onMouseEnter={()=>{this.handleMouseEnter()}} onMouseLeave={()=>{this.handleMouseLeave()}}>
        <MHYML_Transformer state={this.state.translateX}>
          {this.state.imgData.map(image => <img src={image} alt='houses' key={image} style={{borderRadius: '3px'}}></img>)}
        </MHYML_Transformer>
      </MHYML_EC_E_Wrapper>

    )
  }
}

export default ElementCarousel;