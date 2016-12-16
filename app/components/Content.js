'use strict';

import React    from 'react'

import Search   from './Search'
import Results  from './Results'
import Saved    from './Saved'

module.exports = React.createClass({
  getInitialState() {
    return { results: [], saved: [] }
  },

  componentDidMount() {

  },

  componentDidUpdate() {

  },

  setResults(response) {
    this.setState({ results: response.slice(0,5) });
  },

  setSaved(response) {
    const newSaved = this.state.saved;
    newSaved.push(response.data);
    this.setState(newSaved);
  },

  render() {
    return (
      <div>
        <Search setResults={this.setResults} />
        <Results setSaved={this.setSaved} articles={this.state.results} />
        <Saved articles={this.state.saved} />
      </div>
    )
  }
});