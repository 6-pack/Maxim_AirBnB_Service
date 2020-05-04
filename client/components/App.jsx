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
        <div className="test">Hello from React!</div>
      </div>
    );
  }
}


export default App;
