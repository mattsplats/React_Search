'use strict';

import React from 'react'

module.exports = React.createClass({
  getInitialState() {
    return { window_height: $(window).height() }
  },
  
  render() {
    return (
      <footer className="page-footer light-blue lighten-1">
        <div className="footer-copyright">
          <div className="container">
            <div className="right">
              Made by <a className="grey-text text-lighten-2" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});