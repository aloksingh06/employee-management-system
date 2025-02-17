import React from 'react'

function Header() {
  return (
    <div className='w-full flex items-end justify-between  '>
        <h1 className='text-2xl'>Hello <br /> <span className='text-5xl font-semibold'>Alok</span></h1>
        <button className='px-5 py-2 bg-red-500 rounded-xl text-xl font-semibold'>Log Out</button>
    </div>
  )
}

export default Header