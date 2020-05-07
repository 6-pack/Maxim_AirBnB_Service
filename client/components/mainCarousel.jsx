import React from 'react';
import MainCarElement from './MainCarElement.jsx';
import MainCarArrows from './MainCarArrows.jsx';
import styled from 'styled-components';

const MHYML_MC_Wrapper = styled.div`
  position: relative !important;
  z-index: 0 !important;
  height: 320px;
  width: 1032px;
  box-sizing: border-box;
  display: block;
`;

const MHYML_MC_E_Wrapper = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  overflow: hidden !important;
  width: 1048px;
  height: 320px;
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

const MHYML_Arrow_Left = styled.div`
  left: -32px;
  width: 24px !important;
  padding: 0px !important;
  position: absolute !important;
  top: 0px !important;
  bottom: 0px !important;
  display: block !important;
  z-index: 1 !important;
`;

const MHYML_Arrow_Right = styled.div`
  right: -32px;
  width: 24px !important;
  padding: 0px !important;
  position: absolute !important;
  top: 0px !important;
  bottom: 0px !important;
  display: block !important;
  z-index: 1 !important;
`;

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: -33.33333,
    };
  }

  

  render() {
    return (
      <MHYML_MC_Wrapper>
        <MHYML_Arrow_Left>
          <MainCarArrows
          direction="left"
          clickFunction={this.previousElement}
          glyph="&#9664;"
          />
        </MHYML_Arrow_Left>


        <MHYML_MC_E_Wrapper>
          <MHYML_Transformer state={this.state.translateX}>
              {this.props.data.map(room => <MainCarElement data={room} key={room.room_id}/>)}
          </MHYML_Transformer>
        </MHYML_MC_E_Wrapper>

        <MHYML_Arrow_Right>
          <MainCarArrows
            direction="right"
            clickFunction={this.nextElement}
            glyph="&#9654;"
          />
        </MHYML_Arrow_Right>
      </MHYML_MC_Wrapper>
    );
  }
}

export default MainCarousel;
