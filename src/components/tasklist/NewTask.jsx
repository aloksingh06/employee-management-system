import React from 'react'

function NewTask() {
  return (
    <div className='shrink-0 h-full w-[320px] bg-yellow-400 rounded-xl p-5'>
    <div className='flex items-center justify-between'>
        <h2 className='bg-red-500 px-3 py-1 rounded-xl text-sm'>
            HIGH
        </h2>
        <h2 className='text-sm '>02 feb 2025</h2>
    </div>
    <div className='mt-5'>
        <h1 className='text-3xl font-semibold'>Make a YouTube video</h1>
        <p className='text-sm mt-2'>You have to create a youtube video in any topic Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, delectus!</p>
    </div>
    <div className='flex gap-10 mt-10 justify-between'>
        <button className='py-1 px-2 bg-green-400 rounded-lg'>Accept Task</button>
      
    </div>
</div>
  )
}

export default NewTask