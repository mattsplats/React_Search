import React from 'react'

module.exports = React.createClass({
  getInitialState() {
    return { search_term: '' }
  },

  handleChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  render() {
    return (
      <div className="container">
        <div className="orange">
          <h2 className="header center white-text">Search</h2>
        </div>
        <div className="row">
          <form className="col s12">

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