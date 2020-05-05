import React from 'react';
import MainCarousel from './MainCarousel.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "room_id": 1,
          "host_id": 1,
          "location": "Nasvhille, TN",
          "rating": 4.4,
          "room_type": "Mansion",
          "bed_num": 6,
          "description": "A frat boys dream come true.",
          "price_per_night": 60,
          "img_src": [
            "https://loremflickr.com/cache/resized/65535_49259266533_6deda510e9_320_240_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_49259266533_6deda510e9_320_240_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_49259266533_6deda510e9_320_240_nofilter.jpg"
          ]
        },
        {
          "room_id": 2,
          "host_id": 1,
          "location": "Nashville, TN",
          "rating": 4.7,
          "room_type": "Towers",
          "bed_num": 24,
          "description": "Another frat boys dream come true.",
          "price_per_night": 25,
          "img_src": [
            "https://loremflickr.com/cache/resized/65535_47722650711_107f705e93_320_240_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_47722650711_107f705e93_320_240_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_47722650711_107f705e93_320_240_nofilter.jpg"
          ]
        }
      ]
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
      .catch((err) => {console.error(err)})
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className='loading_div'>Loading data, please wait.</div>
      )
    } else {
      return (
        <div>
          <h2 className='componentTitle'>More homes you may like</h2>
          <MainCarousel data={this.state.data}/>
        </div>
      );
    }
  }
}


export default App;
