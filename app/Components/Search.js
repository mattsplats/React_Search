'use strict';

import React from 'react'
import axios from 'axios'

module.exports = React.createClass({
  getInitialState() {
    return { search_term: '' }
  },

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        api_key: '',
        q: this.state.search_term
      }
    }).then(response => {
      this.props.setResults(response.data.response.docs);
      this.setState({ search_term: '' });
    })
  },

  render() {
    return (
      <div className="container">
        <h3 className="header center pad-top-bot-med no-margin-bot orange white-text">Search</h3>
        <div className="row">
          <form className="col s12" autoComplete="off" onSubmit={this.handleSubmit}>

            <div className="input-field">
              <input
                type="text"
                value={this.state.search_term}
                id="search_term"
                className="validate"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="search_term">Search Term</label>
            </div>

            <div className="input-field">
              <input id="start_year" type="number" className="validate" />
              <label htmlFor="start_year">Start Year</label>
            </div>

            <div className="input-field">
              <input id="end_year" type="number" className="validate" />
              <label htmlFor="end_year">End Year</label>
            </div>

            <div className="input-field center-align">
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit <i className="material-icons right">send</i>
              </button>
            </div>

          </form>
        </div>
      </div>
    )
  }
});