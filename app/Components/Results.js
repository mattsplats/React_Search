import React from 'react'

import FoundArticle from './FoundArticle'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="orange">
            <h2 className="header center white-text">Results</h2>
          </div>
          <div className="row">
            <div className="col s12">
              <FoundArticle />
              <FoundArticle />
              <FoundArticle />
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});