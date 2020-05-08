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
      translateX: -50
    }
  }

  render() {
    return (
      <MHYML_EC_E_Wrapper>
        <MHYML_Transformer state={this.state.translateX}>
          {this.state.imgData.map(image => <img src={image} alt='houses' key={image}></img>)}
        </MHYML_Transformer>
      </MHYML_EC_E_Wrapper>

    )
  }
}

export default ElementCarousel;