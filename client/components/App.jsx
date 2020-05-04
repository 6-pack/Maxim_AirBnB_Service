import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: '',
    };
  }


  render() {
    return (
      <div>
        <div className='mainCarousel'></div>
      </div>
    );
  }
}


export default App;
