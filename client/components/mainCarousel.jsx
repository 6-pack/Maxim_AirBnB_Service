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
`;

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
    };
    let styles = {
      width: '350px',
    }
  }

  render() {
    return (
      <MHYML_MC_Wrapper>

        <MainCarArrows
          direction="left"
          clickFunction={this.previousElement}
          glyph="&#9664;"
        />

        <MHYML_MC_E_Wrapper>
          <MHYML_Transformer>
              {this.props.data.map(room => <MainCarElement data={room} key={room.room_id}/>)}
          </MHYML_Transformer>
        </MHYML_MC_E_Wrapper>

        <MainCarArrows
          direction="right"
          clickFunction={this.nextElement}
          glyph="&#9654;"
        />

      </MHYML_MC_Wrapper>
    );
  }
}

export default MainCarousel;
