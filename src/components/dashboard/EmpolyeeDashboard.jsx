import React from 'react'
import Header from '../other/Header'
import TaskNumber from './TaskNumber'
import TaskList from '../tasklist/TaskList'

function EmpolyeeDashboard({data}) {
  console.log(data)
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen'>
    <Header />
    <TaskNumber />
    <TaskList />
    
    </div>
  )
}

export default EmpolyeeDashboard