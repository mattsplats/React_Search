'use strict';

import React from 'react'
import axios from 'axios'

module.exports = React.createClass({
  handleClick() {
    const article = this.props.article;

    axios.post('/api/saved', {
      title: article.headline.main,
      date: article.pub_date,
      url: article.web_url
    }).then(() => {
      this.props.setSaved();
      this.props.onDelete(this.props.index);
    }
   );
  },
  
  render() {
    return (
      <div>
        <div className="divider"></div>
        <div className="row pad-top-bot-sm no-margin-bot">
          <div className="valign-wrapper">
            <div className="col s10">
              <h6 className="valign">
                <a href={this.props.article.web_url} target="_blank">{this.props.article.headline.main}</a>
              </h6>
            </div>
            <div className="col s2">
              <div className="valign right">
                <a className="waves-effect waves-light btn" onClick={this.handleClick}>Save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});