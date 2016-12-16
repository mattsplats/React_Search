'use strict';

import React from 'react'

import FoundArticle from './FoundArticle'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="section">
          <h3 className="header center pad-top-bot-med orange white-text">Results</h3>
          <div className="row">
            <div className="col s12">
              {this.props.articles.map(article =>
                <FoundArticle key={article.web_url} article={article} setSaved={this.props.setSaved} />
              )}
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});