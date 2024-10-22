import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { requrl } from '../Requests'
import { options } from '../Requests'
function Home() {
  return (
    <div>
      <Main/>
      
    {console.log(`1${requrl.upcoming}  2${requrl.popular}  3${requrl.top_rated}   4${requrl.nowplaying}`)}


      <Row rowId={1} title="Upcoming" fetchurl={requrl.upcoming}/>
      <Row rowId={2} title="popular" fetchurl={requrl.popular}/>
      <Row rowId={3} title="top rated" fetchurl={requrl.top_rated}/>
      <Row rowId={4} title="trending" fetchurl={requrl.nowplaying}/>
      
      
    </div>
  )
}

export default Home
