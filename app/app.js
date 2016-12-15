import React    from 'react'
import ReactDOM from 'react-dom'

import Header from './Components/Header'
import Search from './Components/Search'
import Results from './Components/Results'
import Saved from './Components/Saved'
import Footer from './Components/Footer'

// Render Main Component
ReactDOM.render(
  <div className='main-container'>
    
    <Header />
    <Search />
    <Results />
    <Saved />
    <Footer />

  </div>,
  document.getElementById('app')
)