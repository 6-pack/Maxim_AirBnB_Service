import React from 'react';

const MainCarElement = (props) => {
  const styles = {
    width: '350px',
  };
  const currentRoom = props.data;
  return (
    <div style={styles}>
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
    </div>
  );
};

// ToDo: add all elements of each data packet

// notes: eventually replace background image for mainCarElement with a carousel for an element specifically

export default MainCarElement;
