import React from 'react'
import Hero from './Hero';
import Delivery from './Delivery';
import TopPicks from './TopPicks';
import OurFood from './OurFood';

const Home = ({handleAdd}) => {
  return (
    <div className=' mt-[100px]'>
        <Hero/>
        <Delivery/>
        <TopPicks handleAdd={handleAdd}/>
        <OurFood handleAdd={handleAdd}/>
    </div>
  )
}

export default Home;