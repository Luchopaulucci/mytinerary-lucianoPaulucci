import React from 'react'

const Anchord = ({title, to}) => {
  return (
    <a className='m-4 text-2xl text-8' href={to}>{title}</a>
  )
}

export default Anchord