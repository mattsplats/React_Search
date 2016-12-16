'use strict';

import React from 'react'

module.exports = React.createClass({
  render() {
    return (
      <header>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">NYT Article Search</a>
          </div>
        </nav>
      </header>
    )
  }
});