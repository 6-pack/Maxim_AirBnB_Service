import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: ''
    };
  }


  render() {
  return (
    <div id='test'>Hello from React!</div>
  )
  }
}


export default App;