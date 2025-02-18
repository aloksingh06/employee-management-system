import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
    console.log(data)
  return (
    <div id='' className='w-full h-[60%] mt-10 py-5 flex flex-nowrap overflow-x-auto gap-5'>
      {data.tasks.map((v,i)=>{
          if(v.new_task){
             return <NewTask />
          }
          if(v.active){
            return <AcceptTask />
          }
          if(v.completed){
            return <FailedTask />
          }
          if(v.failed){
            return <FailedTask />
          }
      })}
      
    </div>
    
  )
}

export default TaskList