import React from 'react';

const MainCarElement = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div>
      <img src={url} alt='something brazilian'></img>
      <div className='MainCarElement' style={styles}></div>
      <div></div>
    </div>
  )
}

// ToDo: add all elements of each data packet

// notes: eventually replace background image for mainCarElement with a carousel for an element specifically

export default MainCarElement;