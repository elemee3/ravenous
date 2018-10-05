import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    // line 18 Yelp.search(term, location, sortBy) is returning undefined
    // params are all returning undefined in Yelp.js
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    }, networkError => console.log(networkError.message)).then(jsonResponse => {
      return jsonResponse;
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

// Navigate to src, then 'npm start'
