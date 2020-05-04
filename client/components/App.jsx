import React from 'react';
//import mainCarousel from './mainCarousel.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Axios.get('/rooms')
      .then((results) => {
        console.log(results.data);
        this.setState({
          data: results.data
        })
      })
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
