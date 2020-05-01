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
    <h1>Hello from React!</h1>
  )
  }
}


export default App;