import React from 'react'
import Banner from '../components/banner/Banner'
import Lists1 from '../components/lists1/Lists1'
import Lists2 from '../components/lists2/Lists2'
import Lists3 from '../components/lists3/Lists3'
import Links from '../components/links/Links'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Lists1/>
      <Lists2/>
      <Lists3/>
      <Footer/>
      <Links/>
    </div>
  )
}

export default Home