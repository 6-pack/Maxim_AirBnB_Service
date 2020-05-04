import React from 'react';
import MainCarousel from './mainCarousel.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ["https://loremflickr.com/cache/resized/65535_49572202277_66c2c96d9d_320_240_nofilter.jpg", "https://loremflickr.com/cache/resized/65535_49457779677_e4115cb632_n_320_240_nofilter.jpg", "https://loremflickr.com/cache/resized/8278_30155121522_de3bc7cecd_n_320_240_nofilter.jpg"]
    };
  }

  // componentDidMount() {
  //   Axios.get('/rooms')
  //     .then((results) => {
  //       console.log(results.data);
  //       this.setState({
  //         data: results.data
  //       })
  //     })
  //     .catch((err) => {console.error(err)})
  // }

  render() {
    return (
      <div>
        <MainCarousel data={this.state.data}/>
      </div>
    );
  }
}


export default App;
