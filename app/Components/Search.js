'use strict';

import React from 'react'
import axios from 'axios'

import api_key from './nyt_api_key.js'

module.exports = React.createClass({
  getInitialState() {
    return { search_term: '', begin_date: '', end_date: '' }
  },

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();

    const query = {
      params: {
        api_key: process.env.NYT_API_KEY || api_key,
        q: this.state.search_term
      }
    }

    if (this.state.begin_date) query.params.begin_date = `${this.state.begin_date}0101`;
    if (this.state.end_date)   query.params.end_date   = `${this.state.end_date}1231`;

    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', query).then(response => {
      this.props.setResults(response.data.response.docs);
      this.setState({ search_term: '', begin_date: undefined, end_date: undefined });
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
              <input
                type="number"
                value={this.state.begin_date || ''}
                id="begin_date"
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="start_year">Start Year</label>
            </div>

            <div className="input-field">
              <input
                type="number"
                value={this.state.end_date || ''}
                id="end_date"
                className="validate"
                onChange={this.handleChange}
              />
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