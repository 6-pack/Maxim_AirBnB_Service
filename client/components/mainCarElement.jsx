import React from 'react';
import styled from 'styled-components';

const MHYML_Element = styled.div`
  width: 33.333% !important;
  display: inline-block !important;
  vertical-align: top !important;
  white-space: normal !important;
`;

const MainCarElement = (props) => {
  const currentRoom = props.data;
  return (
    <MHYML_Element>
      <img src={currentRoom.img_src[0]} alt="something brazilian" />
      <div>
        <span>
          {currentRoom.room_type}
          :
          {currentRoom.bed_num}
        </span>
        <span>{currentRoom.rating}</span>
      </div>
      <div><span>{currentRoom.description}</span></div>
      <div><span>{currentRoom.price}</span></div>
    </MHYML_Element>
  );
};

// ToDo: add all elements of each data packet

// notes: eventually replace background image for mainCarElement with a carousel for an element specifically

export default MainCarElement;
