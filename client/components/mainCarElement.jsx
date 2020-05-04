import React from 'react';

const mainCarElement = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className='mainCarElement' style={styles}></div>
  )
}

export default mainCarElement;