import React from 'react'
import Main from '../components/Main.jsx'
import Row from '../components/Row.jsx'
import request from '../Request.js'

const Home = () => {
  return (
    <div>
      <Main/>    
      
      <Row IdRow='1' title='Movies' fetchURL={request.requestUpcoming}  />
      
    </div>
  )
}

export default Home