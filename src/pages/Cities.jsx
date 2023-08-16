import React from 'react'
import Carousel from '../components/Carousel'
import Search from '../components/Search'

const Cities = () => {
  return (
    <div className='h-screen w-full flex-row'>
        <Search />
        <Carousel/>
    </div>
  )
}

export default Cities