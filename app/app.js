import React    from 'react'
import ReactDOM from 'react-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'

// Render Main Component
ReactDOM.render(

  <div className='main-container'>
    
    <Header />
    <Footer />

  </div>,
  document.getElementById('app')
)