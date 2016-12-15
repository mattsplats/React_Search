import React from 'react'

import SavedArticle from './SavedArticle'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="orange">
            <h2 className="header center white-text">Saved Articles</h2>
          </div>
          <div className="row">
            <div className="col s12">
              <SavedArticle />
              <SavedArticle />
              <SavedArticle />
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});