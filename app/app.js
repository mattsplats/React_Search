'use strict';

import React    from 'react'
import ReactDOM from 'react-dom'

import Header   from './components/Header'
import Content  from './components/Content'
import Footer   from './components/Footer'

// Render Main Component
ReactDOM.render(
  <div className='main-container'>
    
    <Header />
    <Content />
    <Footer />

  </div>,
  document.getElementById('app')
)