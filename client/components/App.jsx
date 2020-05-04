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
        this.setState({
          data: results.data
        })
      })
      .catch((err) => {console.error(err)})
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
