import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';
// import {Title} from './style';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };

  }

  componentDidMount() {

    axios

    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App container'>
        <div className="text-center m-4 p-4">
          <h1>San Diego Top Spots</h1>
          <p className="tagline">A list of the top 30 places to see in San Diego, California.</p>
        </div>
        { 
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} 
            />
          ))
        }
      </div>
    );
  }
}

export default App;
