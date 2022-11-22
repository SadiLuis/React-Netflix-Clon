import React from 'react'
import Main from '../components/Main.jsx'
import Row from '../components/Row.jsx'
import request from '../Api.js'

const Home = () => {
  return (
    <div>
      <Main/>    
      
      <Row IdRow='1' title='UpComing' fetchURL={request.requestUpcoming}  />
      <Row IdRow='2' title='Popular' fetchURL={request.requestPopular}  />
      <Row IdRow='3' title='Trending' fetchURL={request.requestTrending}  />
      <Row IdRow='4' title='Top Rated' fetchURL={request.requestTopRated}  />
      <Row IdRow='5' title='News' fetchURL={request.requestHorror}  />
    </div>
  )
}

export default Home