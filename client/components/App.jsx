import React from 'react';
import Axios from 'axios';
import MainCarousel from './MainCarousel.jsx';

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
          data: results.data,
        });
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className="loading_div">Loading data, please wait.</div>
      );
    }
    return (
      <div>
        <h2 className="componentTitle">More homes you may like</h2>
        <MainCarousel data={this.state.data} />
      </div>
    );
  }
}


export default App;
