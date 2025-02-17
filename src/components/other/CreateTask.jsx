import React from 'react'

function CreateTask() {
  return (
    <div className='bg-[#1c1c1c] mt-7'>
        <form className='flex w-full items-start justify-between px-10 py-5' >

            <div className='w-1/2'>
                <h3 className='text-zinc-300'>Task title</h3>
                <input className='border-2 border-emerald-500 bg-transparent rounded-xl w-full px-3 py-2 mt-1' type="text" placeholder='Make an UI design'/>
                <h3 className='text-zinc-300 mt-3'>Date</h3>
                <input className='border-2 border-emerald-500 bg-transparent rounded-xl w-full px-3 py-2 mt-1' type="date" />
                <h3 className='text-zinc-300 mt-3'>Asign to</h3>
                <input className='border-2 border-emerald-500 bg-transparent rounded-xl w-full px-3 py-2 mt-1' type="text" placeholder='Employee Name' />
                <h3 className='text-zinc-300 mt-3'>Category</h3>
                <input className='border-2 border-emerald-500 bg-transparent rounded-xl w-full px-3 py-2 mt-1' type="text" placeholder='Design , Dev etc.' />
            </div>
            <div>
                <h3 className='text-zinc-300'>Description</h3>
                <textarea className='border-2 border-emerald-500 bg-transparent rounded-xl w-full px-3 py-2 mt-1' rows='9' cols='50' placeholder='Describe the task'/>
                <button className='bg-emerald-500 w-full px-3 py-2 rounded-xl mt-3'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask