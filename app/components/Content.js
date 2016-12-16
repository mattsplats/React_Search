'use strict';

import React   from 'react'
import axios   from 'axios'

import Search  from './Search'
import Results from './Results'
import Saved   from './Saved'

module.exports = React.createClass({
  getInitialState() {
    return { results: [], saved: [] }
  },

  componentDidMount() {
    this.setSaved();
  },

  setResults(data) {
    this.setState({ results: data.slice(0,5) });
  },

  setSaved(index) {
    axios.get('/api/saved').then(response => 
      this.setState({ saved: response.data })
    )
  },

  render() {
    return (
      <div>
        <Search  setResults={this.setResults} />
        <Results setSaved={this.setSaved} articles={this.state.results} />
        <Saved   setSaved={this.setSaved} articles={this.state.saved} />
      </div>
    )
  }
});