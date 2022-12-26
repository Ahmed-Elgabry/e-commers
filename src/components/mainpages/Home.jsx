import React from 'react'
import Categories from './Categories'
import Slide from './Slide'
import './Home.css'

const Home = () => {
  return (
    <>
        <section className='home'>
            <din className="container d_flex">
                <Categories />
                <Slide />
            </din>
        </section>
    </>
  )
}

export default Home