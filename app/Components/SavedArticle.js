'use strict';

import React from 'react'

module.exports = React.createClass({
  handleClick() {
    
  },
  
  render() {
    return (
      <div>
        <div className="divider"></div>
        <div className="row pad-top-bot-sm no-margin-bot">
          <div className="valign-wrapper">
            <div className="col s10">
              <h6 className="valign">
                <a href={this.props.article.url}>{this.props.article.title}</a>
              </h6>
            </div>
            <div className="col s2">
              <div className="valign right">
                <a className="waves-effect waves-light btn" onClick={this.handleClick}>Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});