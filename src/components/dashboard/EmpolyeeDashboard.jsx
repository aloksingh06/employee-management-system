import React from 'react'
import Header from '../other/Header'
import TaskNumber from './TaskNumber'
import TaskList from '../tasklist/TaskList'

function EmpolyeeDashboard({data}) {
  
  return data ?(
    <div className='bg-[#1c1c1c] p-10 h-screen'>
    <Header data={data} />
    <TaskNumber data={data} />
    <TaskList data={data} />
    
    </div>
  ):(<div>
    LOADING....
  </div>
  )
}

export default EmpolyeeDashboard